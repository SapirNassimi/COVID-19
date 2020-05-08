import React from 'react';
import styled from 'styled-components';

import StyledTableRow from './StyledTableRow';
import { TableCell } from './TableCell';

const TableHeader = props => {
    const onClick = (firstField, secondField) => {
        props.sortTable(firstField, secondField);
    }

    return (
        <StyledTableHeader>
            <TableCell country>Country</TableCell>
            <TableCell onClick={() => onClick('cases', 'total')}>Total Cases</TableCell>
            <TableCell onClick={() => onClick('cases', 'new')}>New Cases</TableCell>
            <TableCell onClick={() => onClick('deaths', 'total')}>Total Deaths</TableCell>
            <TableCell onClick={() => onClick('deaths', 'new')}>New Deaths</TableCell>
            <TableCell onClick={() => onClick('cases', 'critical')}>Critical</TableCell>
            <TableCell onClick={() => onClick('cases', 'recovered')}>Recovered</TableCell>
            <TableCell onClick={() => onClick('cases', 'active')}>Active Cases</TableCell>
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