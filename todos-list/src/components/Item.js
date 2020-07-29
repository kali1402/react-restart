import React from "react";
import styled, { css } from "styled-components";
import { MdDelete, MdDone } from "react-icons/md";

const Remove = styled.div`
  display: none;
  cursor: pointer;
  font-size: 30px;
  color: gray;
  &:hover {
    color: red;
  }
`;

const Itembody = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  &:hover {
    ${Remove} {
      display:block;
    }
  }
`;



const CircleBox = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid silver;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
      ${Remove} {
          display: block;
      }
  }
  ${props => props.checked && css`
    color: green;
    border: 1px solid green;
  `}
`;

const Text = styled.div`
  padding-left: 15px;
  width: 70%;
  ${props => props.checked && css`
    color: silver;
  `}
`;

function Item({ children, checked, id, onToggle, onRemove }) {
  return (
    <Itembody>
      <CircleBox onClick={() => onToggle(id)} checked={checked}>
        {checked && <MdDone />}
      </CircleBox>
      <Text checked={checked}>{children}</Text>
      <Remove>
        <MdDelete onClick={() => onRemove(id)} />
      </Remove>
    </Itembody>
  );
}

export default Item;