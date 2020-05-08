import React from 'react';

import StyledTableRow from './StyledTableRow';
import { TableCell } from './TableCell';

const TableRow = props => {
    const data = props.data;
    console.log(data);

    if (data && Object.keys(data).length > 0) {
        return (
            <StyledTableRow totals={props.totals || undefined}>
                <TableCell country>{data.country}</TableCell>
                <TableCell>{data.cases.total}</TableCell>
                <TableCell inputColor='red'>{data.cases.new}</TableCell>
                <TableCell>{data.deaths.total}</TableCell>
                <TableCell inputColor='red'>{data.deaths.new}</TableCell>
                <TableCell>{data.cases.critical}</TableCell>
                <TableCell inputColor='#06cc06'>{data.cases.recovered}</TableCell>
                <TableCell>{data.cases.active}</TableCell>
            </StyledTableRow>
        );
    }
    
    return (
        <StyledTableRow totals={props.totals || undefined}>

        </StyledTableRow>
    );
}

export default TableRow;