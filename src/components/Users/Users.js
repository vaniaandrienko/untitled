import React, {useEffect, useState} from 'react';
import {axiosService, userService} from "../../services";
import {User} from "../User/User";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, [])
    const getUserId = async (id) => {
        const {data} = await userService.getById(id);
        setUser(data)
    }
    return (
        <div>

            <div>
                {users.map(user => <User key={user.id} user={user} getUserId={getUserId} getUser={getUser}/>)}
            </div>
            {user && <div>{user.name}</div>}

        </div>
    );
};

export {Users}