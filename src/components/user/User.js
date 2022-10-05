import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'
const User = ({ user }) => {
    const { name, username, email, phone, website, id } = user;
    return (
        <div className='user-border'>
            <h2 className="text-4xl">Name: {name}</h2>
            <h4 className="text-xl">UserName: {username}</h4>
            <p>Email: {email}</p>
            <a href={`https://${website}`} ><p>Website Link: {website}</p></a>
            <strong>Phone Number: {phone}</strong>
            <br />
            <Link to={`/user/${id}`} className=' bg-cyan-500 px-3 py-1 rounded-md mt-12'>Details</Link>
        </div>
    );
};

export default User;