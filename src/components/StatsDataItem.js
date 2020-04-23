import React from 'react';
import styled from 'styled-components'

const StatsDataItem = props => {
    const data = props.data;

    const ListItem = styled.li`
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        padding-left: 30px;
        padding-right: 30px;
    `;

    const Column = styled.div`
        flex-basis: ${props => props.country ? '16%' : '12%'};

        ${props => props.country && `
            font-weight: bolder;
        `}
    `;

    return (
        <ListItem>
            <Column primary>{data.country}</Column>
            <Column>{data.cases.total}</Column>
            <Column>{data.cases.new}</Column>
            <Column>{data.deaths.total}</Column>
            <Column>{data.deaths.new}</Column>
            <Column>{data.cases.critical}</Column>
            <Column>{data.cases.recovered}</Column>
            <Column>{data.cases.active}</Column>
        </ListItem>
    );
}

export default StatsDataItem;