import React from 'react';

import StatsTableHeader from './StatsTableHeader';
import StatsDataItem from './StatsDataItem';

const StatsDataTable = props => {
    const data = props.data;
    const global = props.global;    
    
    return (
        <ul className='data-table'>
            <StatsTableHeader />
            {
                data.map(country =>
                    <StatsDataItem key={country.country} data={country}/>
                )
            }
            <StatsDataItem totals key={global.country} data={global}/>
        </ul>
    );
}

export default StatsDataTable;