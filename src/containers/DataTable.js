import React from 'react';

import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const DataTable = props => {
    return (
        <ul>
            <TableHeader sortTable={props.sortTable}/>
            {
                props.countriesData.map(country =>
                    <TableRow key={country.country} data={country}/>
                )
            }
            <TableRow key={props.globalData.country} data={props.globalData} totals/>
        </ul>
    )
}

export default DataTable;