import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCountriesData, getContinentsData, getGlobalData } from '../api/data';

import PageHeader from './PageHeader';
import DataTable from './DataTable';
import { sortByProperty } from '../utils/sort';

const App = () => {
    const [countriesData, setCountriesData] = useState([]);
    const [continentsData, setContinentsData] = useState([]);
    const [globalData, setGlobalData] = useState({});

    useEffect(() => {
        retriveAppData();
    }, []);

    useEffect(() => {
        sortByProperty(countriesData, 'cases', 'total', false);
    }, [countriesData]);

    const retriveAppData = async () => {
        const countriesFromServer = await getCountriesData();
        const continentsFromServer = await getContinentsData();
        const globalFromServer = await getGlobalData();

        setCountriesData(countriesFromServer);
        setContinentsData(continentsFromServer);
        setGlobalData(globalFromServer);
    }

    return (
        <Body>
            <PageHeader globalData={globalData} />
            <DataTable countriesData={countriesData}
                continentsData={continentsData}
                globalData={globalData} />
        </Body>
    )
}

const Body = styled.div`
    color: #333;
    background-color: #e0e4e6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0 auto;
    padding: 0 4%;
    display: flex;
    flex-direction: column;
`;

export default App;