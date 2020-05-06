import React    from 'react';
import styled from 'styled-components';

let valueColor;

const Container = styled.div`
    padding: 30px 25px;
    `;

const Title = styled.div`
    color: #95a5a6;
    text-transform: uppercase;
    font-weight: bolder;
    text-align: center;
    font-size: 14px;
    margin-bottom: 10px;
    `;

const Value = styled.div`
    text-align: center;
    font-weight: bolder;
    font-size: 24px;
    color: ${valueColor};
    `;

const GlobalDataItem = props => {
    valueColor = props.color;

    return (
        <Container>
            <Title>{props.title}</Title>
            <Value>{props.value}</Value>
        </Container>
    );
}

export default GlobalDataItem;