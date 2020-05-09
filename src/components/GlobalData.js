import React, { useState } from 'react';
import styled from 'styled-components';

const GlobalData = props => {
    const { data } = props;

    if (Object.keys(data).length === 0) {
        return (
            <div>

            </div>
        )
    }

    return (
        <div>
            <DataDiv>
                TOTAL CASES {data.cases.total}
            </DataDiv>
            <DataDiv>
                TOTAL DEATHS {data.deaths.total}
            </DataDiv>
            <DataDiv>
                RECOVERED {data.cases.recovered}
            </DataDiv>
        </div>
    )
}

const DataDiv = styled.div`
    
`;

export default GlobalData;