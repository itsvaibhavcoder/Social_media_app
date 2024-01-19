import React from "react";
import Post from './Post';

function PostList({ posts }) {
    return (
        <div>
            {posts.map((post, i) => (
                <Post key={i} post={post} />
            ))}
        </div>
    );
}

export default PostList;
