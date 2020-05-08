import React from 'react';

import TableHeader from '../components/TableHeader';
import TableRow from '../components/TableRow';

const DataTable = props => {
    return (
        <ul>
            <TableHeader />
            {
                props.countriesData.map(country =>
                    <TableRow data={country}/>
                )
            }
            <TableRow data={props.globalData}/>
        </ul>
    )
}

export default DataTable;