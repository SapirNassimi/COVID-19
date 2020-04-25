import React from 'react';
import styled from 'styled-components';

import GlobalDataItem from './GlobalDataItem';

const GlobalData = props => {
    const data = props.data;

    const Container = styled.div`
        display: flex;
        flex-direction: row;
    `;
    
    const LastUpdateTime = styled.div`
        color: #95a5a6;
        font-size: 12px;
        float: left;
        padding-right: 1%;
        font-weight: bolder;
        text-align: center;
    `;

    return (
        <>
            <Container>
                <GlobalDataItem title='Coronavirus Cases' value={data.cases.total} color='red'/>
                <GlobalDataItem title='Deaths' value={data.deaths.total} color='red'/>
                <GlobalDataItem title='Recovered' value={data.cases.recovered} color='#06cc06'/>
            </Container>
            <LastUpdateTime>Last Update Time: {new Date(data.time).toLocaleString()}</LastUpdateTime>
        </>
    );
}

export default GlobalData;