import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../post/Post';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1 className="text-6xl">There are {posts.length} of post here.</h1>
            <div className="grid grid-cols-2">
                {
                    posts.map(post => <Post key={post.id} post={post} />)
                }
            </div>
        </div>
    );
};

export default Posts;