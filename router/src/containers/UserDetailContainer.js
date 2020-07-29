import React, { useEffect } from 'react';
import UserDetail from '../components/UserDetail';
import { useSelector, useDispatch } from 'react-redux';
import { getUserDetail } from '../modules/user';

function UserDetailContainer({ userID }) {
    const { loading, data, error } = useSelector(state => state.user.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserDetail(userID));
    }, [userID, dispatch]);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러발생!</div>
    if (!data) return null;

    return (
        <>
            <UserDetail user={data} />
        </>
    );
};

export default UserDetailContainer;