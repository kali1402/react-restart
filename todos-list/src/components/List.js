import React from 'react';
import Item from './Item';
import styled from 'styled-components';

const ListBody = styled.div`
    width: 560px;
    height: 400px;
    padding-top: 100px;
    padding-left: 50px;
`;

function List({ todos, onToggle, onRemove }) {
    return (
        <ListBody>
            {todos.map(todo => (
                <Item key={todo.id} id={todo.id} onToggle={onToggle} checked={todo.checked} onRemove={onRemove}>{todo.text} </Item>
            ))}
        </ListBody>
    );
}

export default List;