import React, { useState } from "react";
import styled from "styled-components";

const Addbody = styled.div`
  display: flex;
`;

const TextBox = styled.input`
  width: 180px;
  height: 30px;
  margin-left: 110px;
`;

const Btn = styled.button`
  cursor: pointer;
  width: 100px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Add({ onAdd }) {
    const [text, setText] = useState("");
    const changeText = (e) => {
        setText(e.target.value);
    };

    const Enter = (e) => {
        if (e.which === 13) {
            if (text === "") {
                alert("빈칸으로는 생성이 불가능합니다.");
            } else {
                setText("");
                onAdd(text);
            }
        }
    }

    const clickCreate = () => {
        if (text === "") {
            alert("빈칸으로는 생성이 불가능합니다.");
        } else {
            setText("");
            onAdd(text);
        }
    }

    return (
        <Addbody>
            <TextBox value={text} onChange={(e) => changeText(e)} onKeyDown={(e) => Enter(e)} />
            <Btn onClick={() => clickCreate()}>생성</Btn>
        </Addbody>
    );
}
export default Add;