import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import * as ActionUserCreators from '../../actions/userCreators';

const UserProfile = () => {
    const { id } = useParams();
    // const { users } = useSelector(({ users }) => users);
    // const [user] = users.filter((u) => Number(id) === u.id);
    const { getUserRequest } = bindActionCreators(ActionUserCreators, useDispatch)
    useEffect(() => {
        getUserRequest(id)
    }, [])
    return (
        <article>
            <h1>{user.login}</h1>
        </article>
    );
};

export default UserProfile;
