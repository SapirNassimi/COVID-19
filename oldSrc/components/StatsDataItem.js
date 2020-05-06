import React from 'react';

import { ListItem } from './ListItem';
import { Column } from './Column';

const StatsDataItem = props => {
    const data = props.data;

    return (
        <ListItem totals={props.totals || undefined}>
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