import React, { useState } from 'react';

import { getCountriesData, getContinentsData, getGlobalData } from '../api/data';

import PageHeader from './PageHeader';
import DataTable from './DataTable';

const App = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [continentsData, setContinentsData] = useState([]);
    const [globalData, setGlobalData] = useState({});

    const retriveAppData = async () => {
        setCountriesData(getCountriesData());
        setContinentsData(getContinentsData());
    }

    return (
        <div>
            <PageHeader />
            <DataTable />
        </div>
    )
}

export default App;