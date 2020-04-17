import React from 'react';

import StatsTableHeader from './StatsTableHeader';
import StatsDataItem from './StatsDataItem';

const StatsDataTable = props => {
    const data = props.data;
    
    
    
    return (
        <ul className='data-table'>
            <StatsTableHeader />
            {
                data.map(country =>
                    <StatsDataItem key={country.country} data={country}/>
                )
            }
        </ul>
    );
}

export default StatsDataTable;