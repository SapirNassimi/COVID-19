import React from 'react';
import styled from 'styled-components';

import StyledTableRow from './StyledTableRow';
import { TableCell } from './TableCell';

const TableHeader = () => {
    return (
        <StyledTableHeader>
            <TableCell country>Country</TableCell>
            <TableCell>Total Cases</TableCell>
            <TableCell>New Cases</TableCell>
            <TableCell>Total Deaths</TableCell>
            <TableCell>New Deaths</TableCell>
            <TableCell>Critical</TableCell>
            <TableCell>Recovered</TableCell>
            <TableCell>Active Cases</TableCell>
        </StyledTableHeader>
    )
}

const StyledTableHeader = styled(StyledTableRow)`
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding-top: 25px;
    padding-bottom: 25px;
    `;

export default TableHeader;