import React from 'react';
import styled from 'styled-components';
import Button from './button';

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;    
  }

  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

function Dialog({ title, children, visible, onDelete, onCancel }) {

    if (!visible) return null;

    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Button color="red" onClick={onCancel}>삭제</Button>
                    <Button color="blue" onClick={onDelete}>취소</Button>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
}

export default Dialog;