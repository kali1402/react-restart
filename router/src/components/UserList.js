import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from "react-redux";

// 테이블 스타일을 설정한다.
const StyledTable = styled.table`
  border: 1px solid black;
  margin-top: 30px;
  margin-left: 30px;
  border-collapse: collapse;
  width: 300px;
  th {
    border: 1px solid black;
    text-align: center;
    height: 50px;
    background-color: silver;
  }
  td {
    border: 1px solid black;
    text-align: center;
    height: 30px;
  }
`;

function UserList({ users }) {
    const dispatch = useDispatch();
    const deleteUser = (e) => {
        onClick(parseInt(e.target.value, 10));
    }
    const onClick = (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            dispatch({ type: "DEL_USER", id, });
        }
    }
    return (
        <>
            <StyledTable>
                <thead>
                    <tr>
                        <th colSpan="2">USER LIST</th>
                    </tr>
                </thead>
                <tbody key='tbody'>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td width="200px">
                                <Link to={`/users/${user.id}`}>{user.name}</Link>
                            </td>
                            <td>
                                <button onClick={deleteUser} value={user.id}>삭제</button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan="2"><Link to="/UserCreate"><button>리스트 추가</button></Link></td>
                    </tr>
                </tbody>
            </StyledTable>
        </>
    );
};

export default UserList;