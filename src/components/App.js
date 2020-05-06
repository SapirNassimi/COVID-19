import React, { useState, useEffect } from 'react';

import getOnlineWorldwideStatistics from '../logic/fetch-statistics';
import getCountriesNames from '../logic/fetch-countries';
import { sortByProperty } from '../utils/sort';

import { Body } from './Body';
import GlobalData from './GlobalData';
import StatsDataTable from './StatsDataTable';

const App = () => {
    const [allDataFromServer, setAllDataFromServer] = useState([]);
    const [countriesData, setCountriesData] = useState([]);
    const [continentsData, setContinentsData] = useState([]);
    const [globalData, setGlobalData] = useState({
        cases: {
            all: '',
            recovered: ''
        },
        deaths: {
            all: ''
        }
    });
    const [countriesNames, setCountriesNames] = useState([]);

    const loadCountriesNames = async () => {
        const countriesNamesResponse = await getCountriesNames();
        setCountriesNames(countriesNamesResponse);
    }

    const loadAllStatsFromServer = async () => {
        let data = await getOnlineWorldwideStatistics();
        sortByProperty(data, 'cases', 'total', false);
        setAllDataFromServer(data);
    }

    useEffect(() => {
        const tempCountries = [];
        const tempContinents = [];

        allDataFromServer.map(record => {
            countriesNames.includes(record.country) ?
                tempCountries.push(record) :
                (record.country === 'All' ? setGlobalData(record) : tempContinents.push(record));
        });

        setCountriesData(tempCountries);
        setContinentsData(tempContinents);

    }, [countriesNames, allDataFromServer]);

    useEffect(() => {
        loadCountriesNames();
        loadAllStatsFromServer();
    }, []);

    return (
        <Body>
            <GlobalData data={globalData}/>
            <StatsDataTable data={countriesData} setData={setCountriesData} global={globalData}/>
        </Body>
    );
}

export default App;