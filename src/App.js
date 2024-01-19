import React from "react";
import Login from './components/Login';
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
    const [user, setUser] = React.useState('vaibhav');
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';
    }, [user]);

    if (!user) {
        return (
            <div>
                <Login setUser={setUser} />
            </div>
        );
    } else {
        return (
            <>
                <Header user={user} setUser={setUser} />
                <CreatePost user={user} setPosts={setPosts} posts={posts} />
                {posts.map((post,i) => (
                    <div>
                        {post.image && post.content && (
                            <React.Fragment key={i}>
                                <img
                                    style={{ height: 100, width: 200, objectFit: 'cover' }}
                                    src={URL.createObjectURL(post.image)}
                                    alt="Post cover"
                                />
                                <p>{post.content}</p>
                                <div>{user}</div>
                            </React.Fragment>
                        )}
                    </div>
                ))}
            </>
        );
    }
}

export default App;
