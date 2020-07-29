import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <h1>홈화면입니다.</h1>
            <div>안녕하세요.</div>
            <Link to="/users"><button>사용자 리스트</button></Link>
        </>
    );
};

export default Home;