import axios from 'axios';

const getOnlineWorldwideStatistics = async () => {
    const response = await axios.get('https://covid-193.p.rapidapi.com/statistics', {
        headers: {
            'x-rapidapi-host': 'covid-193.p.rapidapi.com',
            'x-rapidapi-key': 'd7382f77damsh1447cc50e9c4f49p1b3e7cjsn48d3d0e9d300'
        }
    });

    console.log(response.data.response);
    
    return response.data.response;
}

export default getOnlineWorldwideStatistics;