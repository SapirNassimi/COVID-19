import React from 'react';

const StatsTableHeader = props => {
    return (
        <li className='table-header'>
            <div className='col col-1'>Country</div>
            <div className='col col-2'>Total Cases</div>
            <div className='col col-3'>New Cases</div>
            <div className='col col-4'>Total Deaths</div>
            <div className='col col-5'>New Deaths</div>
            <div className='col col-6'>Critical</div>
            <div className='col col-7'>Recovered</div>
            <div className='col col-8'>Active Cases</div>
        </li>
    );
}

export default StatsTableHeader;