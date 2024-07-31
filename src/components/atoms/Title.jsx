import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 35px;
    color: #ffffff;
    margin-left: 15px;
`;

function Title(props) {
    return (
        <TitleStyled>
            <h2>Blog Website</h2>
        </TitleStyled>
    );
}

export default Title;
