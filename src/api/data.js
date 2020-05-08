import axios from 'axios';

const countriesData = [];
const continentsData = [];
let globalData = {};

export const getCountriesData = async () => {
    if (fetchDataIsNeeded()) {
        await fetchData();
    }

    console.log('Countries from server: ', countriesData);

    return countriesData;
}

export const getContinentsData = async () => {
    if (fetchDataIsNeeded()) {
        await fetchData();
    }

    console.log('Continents from server: ', continentsData);

    return continentsData;
}

export const getGlobalData = async () => {
    if (fetchDataIsNeeded()) {
        await fetchData();
    }

    console.log('Global from server: ', globalData);

    return globalData;
}

const fetchData = async () => {
    const statistics = await getStatisticsFromServer();
    const countriesNames = await getCountriesNamesFromServer();

    if (statistics && countriesNames) {
        countriesData.length = 0;
        continentsData.length = 0;

        statistics.map(record => {
            countriesNames.includes(record.country) ?
                countriesData.push(record) :
                (record.country === 'All' ? globalData = record : continentsData.push(record));
        });
    }
}

const fetchDataIsNeeded = () => {
    return countriesData.length === 0;
}

const getStatisticsFromServer = async () => {
    const response = await axios.get('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'd7382f77damsh1447cc50e9c4f49p1b3e7cjsn48d3d0e9d300'
        }
    });

    return response.data.response;
}

const getCountriesNamesFromServer = async () => {
    const response = await axios.get('https://covid-193.p.rapidapi.com/countries', {
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'd7382f77damsh1447cc50e9c4f49p1b3e7cjsn48d3d0e9d300'
        }
    });

    return response.data.response;
}