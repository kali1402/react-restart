import React from 'react';
import styled from 'styled-components';

const HeadBody = styled.div`
    width: 100%;
    height: 100px;
    text-align: center;
`;

function Head({ todos }) {

    let today = new Date();
    let day = today.getDay();
    const d_day = ["일", "월", "화", "수", "목", "금", "토"]

    return (
        <HeadBody>
            <h1>{today.getFullYear() + "년 " + (today.getMonth() + 1) + "월 " + today.getDate() + "일 " + d_day[day] + "요일"}</h1>

            할 일 {todos.length} 개

        </HeadBody>
    )
}

export default Head;