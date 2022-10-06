import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from 'react-router-dom';
import * as ActionUserCreators from '../../actions/userCreators';

const UsersList = () => {
    const { users, isFetching, error } = useSelector(({ users }) => users);
    const { getUsersRequest } = bindActionCreators(ActionUserCreators, useDispatch());
    useEffect(() => {
        getUsersRequest({ limit: 5, offset: 0 })
    }, [])
    return (
        <section>
            {
                users.map(u =>
                    (<article key={u.id}>
                        <h3><Link to={`/users/${u.id}`}>{u.login}</Link></h3>
                        <img alt={u.login} src={`http://localhost:5000/${u.avatar}`}/>
                    </article>
                ))
            }
        </section>
    );
}

export default UsersList;
