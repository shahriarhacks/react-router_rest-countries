import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../user/User';
import './Users.css'

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1 className="text-6xl">There are {users.length} of Users</h1>
            <div className='users-border'>
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;