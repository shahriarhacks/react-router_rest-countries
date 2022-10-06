import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData();
    const { title, body } = post;
    return (
        <div>
            <h1 className='text-5xl'> Post Details here</h1>
            <h3 className='text-3xl'>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetail;