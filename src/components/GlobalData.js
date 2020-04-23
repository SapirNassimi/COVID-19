import React from 'react';

const GlobalData = props => {
    const data = props.data;
    
    return (
        <div key='global-data-wrapper'>
            <div className='totals-data-div'>
                <div className='top-data-title-div'>
                    <p className='top-data-title'>Coronavirus Cases</p>
                    <p className='top-data-value red' key='virus-cases-top'>{data.cases.total}</p>
                </div>
                <div className='top-data-title-div'>
                    <p className='top-data-title'>Deaths</p>
                    <p className='top-data-value red' key='deaths-top'>{data.deaths.total}</p>
                </div>
                <div className='top-data-title-div'>
                    <p className='top-data-title'>Recovered</p>
                    <p className='top-data-value green' key='recovered-top'>{data.cases.recovered}</p>
                </div>
            </div>
            <div className='top-data-update-time-title-div'>
                <p classNAme='top-data-title update-time'>
                    Last Update Time: {new Date(data.time).toLocaleString()}
                </p>
            </div>
        </div>
    );
}

export default GlobalData;