import React from 'react';
import './User.css'
const User = ({ user }) => {
    const { name, username, email, phone, website } = user;
    return (
        <div className='user-border'>
            <h2 className="text-4xl">{name}</h2>
            <h4 className="text-xl">{username}</h4>
            <p>{email}</p>
            <p>{website}</p>
            <strong>{phone}</strong>
            <button>Details</button>
        </div>
    );
};

export default User;