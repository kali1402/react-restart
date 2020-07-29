import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    color: ${props => props.color};
    background-color: ${props => props.backcolor};
`;

function button({ children, color, backcolor, onClick }) {
    return (
        <Btn color={color} backcolor={backcolor} onClick={onClick}>{children}</Btn>
    )
}

export default button;
