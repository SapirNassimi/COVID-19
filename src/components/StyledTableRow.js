import styled from 'styled-components';

const StyledTableRow = styled.li`
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: #fff;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: 0px 0px 9px 2px rgba(0, 0, 0, 0.1);

    ${props => props.totals && `
        background-color: #e1e6e7;
        font-weight: bolder;
        color: #6e9194;
    `};
`;

export default StyledTableRow;