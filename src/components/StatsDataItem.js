import React from 'react';

const StatsDataItem = props => {
    const data = props.data;

    return (
        <li className='table-row'>
            <div className='col col-1'>{data.country}</div>
            <div className='col col-2'>{data.cases.total}</div>
            <div className='col col-3 red'>{data.cases.new}</div>
            <div className='col col-4'>{data.deaths.total}</div>
            <div className='col col-5 red'>{data.deaths.new}</div>
            <div className='col col-6'>{data.cases.critical}</div>
            <div className='col col-7 green'>{data.cases.recovered}</div>
            <div className='col col-8'>{data.cases.active}</div>
        </li>
    );
}

export default StatsDataItem;