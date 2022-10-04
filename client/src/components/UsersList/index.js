import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionUserCreators from '../../actions/userCreators';

const UsersList = () => {
    const { users, isFetchong, error } = useSelector(({ users }) => users);
    const { getUsersRequest } = bindActionCreators(ActionUserCreators, useDispatch());
    useEffect(() => {
        getUsersRequest()
    })
    return (
        <section>
            {
                users.map(u =>
                    (<article key={u.id}>
                        <h3>{u.login}</h3>
                    </article>
                ))
            }
        </section>
    );
}

export default UsersList;
