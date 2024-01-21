import React from "react";
import Post from './Post';

function PostList({ posts}) {
    return (
        <div>
            {/* we can use spred operator here to spred post to use image as object in post */}
            {posts.map((post, i) => (
                <Post key={post.id} {...post}/>
            ))}
        </div>
    );
}

export default PostList;
