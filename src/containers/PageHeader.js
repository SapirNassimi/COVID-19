import React, { useState } from 'react';
import styled from 'styled-components';

const PageHeader = props => {
    const [searchText, setSearchText] = useState({
        search: '',
    });

    const onChange = e => {
        setSearchText({
            ...searchText,
            [e.target.name]: e.target.value,
        });

        props.updateTable(e.target.value);
    }

    return (
        <div>
            <StyledInput 
                name='search'
                type='text'
                placeholder='Search'
                value={searchText.search}
                onChange={onChange}/>            
        </div>
    )
}

const StyledInput = styled.input`
    width: 100px;
    height: 20px;
    border-radius: 10px;
    outline: none;
    margin-right: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 8px;
`;

export default PageHeader;