import React from 'react';
import styled from 'styled-components';

import { sortByProperty } from '../utils/sort';

import { ListItem } from './ListItem';
import { Column } from './Column';

const TableHeader = styled(ListItem)`
    background-color: #95a5a6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding-top: 25px;
    padding-bottom: 25px;
    `;

const StatsTableHeader = props => {
    return (
        <TableHeader>
            <Column country>Country</Column>
            <Column onClick={() => {
                sortByProperty(props.data, 'cases', 'total', true);
                props.setData(props.data);
            }}>Total Cases</Column>
            <Column>New Cases</Column>
            <Column>Total Deaths</Column>
            <Column>New Deaths</Column>
            <Column>Critical</Column>
            <Column>Recovered</Column>
            <Column>Active Cases</Column>
        </TableHeader>
    );
}

export default StatsTableHeader;