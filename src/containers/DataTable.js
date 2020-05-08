import React from 'react';

import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const DataTable = props => {
    return (
        <ul>
            <TableHeader />
            {
                props.countriesData.map(country =>
                    <TableRow key={country.country} data={country}/>
                )
            }
            <TableRow key={props.globalData.country} data={props.globalData}/>
        </ul>
    )
}

export default DataTable;