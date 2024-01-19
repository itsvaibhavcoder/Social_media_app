import React from "react";
import Login from './components/Login';
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

const functionscount = new Set();
function App() {
    const [user, setUser] = React.useState('vaibhav');
    const [posts, setPosts] = React.useState([]);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';
    }, [user]);

// function handleAddPost(newPost){
//    setPosts([newPost, ...posts])
// }

const handleAddPost = React.useCallback(newPost=>{
    setPosts([newPost, ...posts]);
},[posts]);
functionscount.add(handleAddPost);
console.log(functionscount);
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
                <CreatePost user={user} handleAddPost={handleAddPost}/>
                <PostList posts={posts}/>
                <button onClick ={()=> setCount(prev=> prev+1)}>{count}+</button>
            </>
        );
    }
}

export default App;
