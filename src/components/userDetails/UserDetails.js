import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { name, username, email, phone, website, address, company } = user;
    const { street, suite, city, zipcode } = address;
    const { catchPhrase, bs } = company;
    return (
        <div>
            <h2 className="text-4xl">Everything you will know about {name}</h2>
            <p>username: {username}</p>
            <p>Email: {email}</p>
            <a href={`https://${website}`} ><p>Website Link: {website}</p></a>
            <p>Phone Number: {phone}</p>
            <div>
                <h3>Address: </h3>
                <p>Street: {street}</p>
                <p>Suit: {suite}</p>
                <p>City: {city}</p>
                <p>ZipCode: {zipcode}</p>
            </div>
            <div>
                <h3>Company Details:</h3>
                <h5>Company Name: {company.name}</h5>
                <p>{catchPhrase}</p>
                <p>{bs}</p>
            </div>
        </div>
    );
};

export default UserDetails;