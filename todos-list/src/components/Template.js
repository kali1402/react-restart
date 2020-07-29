import React from 'react';
import Head from './Head';
import Add from './Add';
import List from './List';
import styled from 'styled-components';

const Templatebody = styled.div`
    width: 560px;
    height: 600px;
    background: white;
    display: flex;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 15px;

    flex-direction: column;
`;

function Template({ todos, onToggle, onRemove, onAdd }) {
    return (
        <Templatebody>
            <Head todos={todos} />
            <List todos={todos} onToggle={onToggle} onRemove={onRemove} />
            <Add onAdd={onAdd} />
        </Templatebody>
    )
}

export default Template;