import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { title, id } = post;
    return (
        <div>
            <h1 className='text-3xl'>{title}</h1>
            <Link to={`/post/${id}`} className='bg-blue-400 px-3 py-1 rounded'>Details</Link>
        </div>
    );
};

export default Post;