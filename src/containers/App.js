import React, { useState, useEffect } from 'react';

import { getCountriesData, getContinentsData, getGlobalData } from '../api/data';

import PageHeader from './PageHeader';
import DataTable from './DataTable';

const App = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [continentsData, setContinentsData] = useState([]);
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        retriveAppData();
    }, []);

    const retriveAppData = async () => {
        const countriesFromServer = await getCountriesData();
        const continentsFromServer = await getContinentsData();
        const globalFromServer = await getGlobalData();

        setCountriesData(countriesFromServer);
        setContinentsData(continentsFromServer);
        setGlobalData(globalFromServer);
    }

    return (
        <div>
            <PageHeader globalData={globalData} />
            <DataTable countriesData={countriesData}
                continentsData={continentsData}
                globalData={globalData} />
        </div>
    )
}

export default App;