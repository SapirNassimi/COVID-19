import styled from 'styled-components';

export const TableCell = styled.div`
    flex-basis: ${props => props.country ? '16%' : '12%'};
    color: ${props => props.inputColor || '#333'};

    ${props => props.country && `
        font-weight: bolder;
    `};
`;