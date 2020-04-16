import React, { useState, useEffect } from 'react';

import getOnlineWorldwideStatistics from '../logic/fetch-data';
import StatsDataTable from './StatsDataTable';

const App = () => {
    const [tableData, setTableData] = useState({
        response: []
    });

    const loadData = async () => {
        const data = await getOnlineWorldwideStatistics();

        setTableData(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <StatsDataTable data={tableData}/>
    );
}

export default App;