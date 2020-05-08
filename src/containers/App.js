import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getCountriesData, getContinentsData, getGlobalData } from '../api/data';

import PageHeader from './PageHeader';
import DataTable from './DataTable';
import { sortByProperty } from '../utils/sort';

const App = () => {
    const [allCountriesData, setAllCountriesData] = useState([]);
    const [allContinentsData, setAllContinentsData] = useState([]);
    const [countriesDataToShow, setCountriesDataToShow] = useState([]);
    const [continentsDataToShow, setContinentsDataToShow] = useState([]);
    const [globalData, setGlobalData] = useState({});
    const [sortedBy, setSortedBy] = useState({
        firstField: 'cases',
        secondField: 'total',
        isDescending: false
    })

    useEffect(() => {
        retriveAppData();
    }, []);

    useEffect(() => {
        sortTableData('cases', 'total');
    }, [countriesDataToShow], [continentsDataToShow]);

    const retriveAppData = async () => {
        const countriesFromServer = await getCountriesData();
        const continentsFromServer = await getContinentsData();
        const globalFromServer = await getGlobalData();

        setAllCountriesData(countriesFromServer);
        setAllContinentsData(continentsFromServer);
        setCountriesDataToShow(countriesFromServer);
        setContinentsDataToShow(continentsFromServer);
        setGlobalData(globalFromServer);
    }

    const filterData = filteringText => {
        const filteredCountries = [];
        const filteredContinents = [];

        filteringText = filteringText.toUpperCase();
        
        for (let i = 0; i < allCountriesData.length; i++) {
            if (allCountriesData[i].country.toUpperCase().includes(filteringText)) {
                filteredCountries.push(allCountriesData[i]);
            }
        }

        for (let i = 0; i < allContinentsData.length; i++) {
            if (allContinentsData[i].country.toUpperCase().includes(filteringText)) {
                filteredContinents.push(allContinentsData[i]);
            }
        }

        setCountriesDataToShow(filteredCountries);
        setContinentsDataToShow(filteredContinents);
    }

    const sortTableData = (firstField, secondField) => {
        console.log(secondField);

        if (firstField === sortedBy.firstField && secondField === sortedBy.secondField) {
            sortByProperty(countriesDataToShow, firstField, secondField, !sortedBy.isDescending);
            sortByProperty(continentsDataToShow, firstField, secondField, !sortedBy.isDescending);

            setSortedBy({
                ...sortedBy,
                isDescending: !sortedBy.isDescending
            });
        } else {
            sortByProperty(countriesDataToShow, firstField, secondField, false);
            sortByProperty(continentsDataToShow, firstField, secondField, false);

            setSortedBy({
                firstField,
                secondField,
                isDescending: true
            });
        }
    }

    return (
        <Body>
            <PageHeader globalData={globalData} updateTable={filterData}/>
            <DataTable
                countriesData={countriesDataToShow}
                continentsData={continentsDataToShow}
                globalData={globalData}
                sortTable={sortTableData}/>
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