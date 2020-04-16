import React, { useState, useEffect } from 'react';
import getOnlineWorldwideStatistics from '../logic/fetch-data';

const App = () => {
    const [tableData, setTableData] = useState({});
    let [num, setNum] = useState(0);

    const loadData = async () => {
        const data = await getOnlineWorldwideStatistics();

        setTableData(data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className='app'>
            <button onClick={() => setNum(num + 1)}>
                {tableData.response ? tableData.response[num].country : null}
            </button>
        </div>
    );
}

export default App;