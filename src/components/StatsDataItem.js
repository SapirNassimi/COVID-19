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
        color: ${props => props.inputColor || '#333'};

        ${props => props.country && `
            font-weight: bolder;
        `};
    `;

    return (
        <ListItem>
            <Column country>{data.country}</Column>
            <Column>{data.cases.total}</Column>
            <Column>{data.cases.new}</Column>
            <Column>{data.deaths.total}</Column>
            <Column inputColor='red'>{data.deaths.new}</Column>
            <Column>{data.cases.critical}</Column>
            <Column inputColor='#06cc06'>{data.cases.recovered}</Column>
            <Column>{data.cases.active}</Column>
        </ListItem>
    );
}

export default StatsDataItem;