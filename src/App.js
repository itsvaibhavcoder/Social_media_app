import React from "react";
import Login from './components/Login';
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import postReducer from './reducer';
export const UserContext = React.createContext();
export const PostContext = React.createContext({
    posts:[]
});
// const functionscount = new Set();
function App() {
    const initialPostState = React.useContext(PostContext);
    const [state, dispatch] = React.useReducer(postReducer, initialPostState);

    const [user, setUser] = React.useState('vaibhav');
    // const [posts, setPosts] = React.useState([]);
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        document.title = user ? `${user}'s Feed` : 'Please Login';
    }, [user]);

// function handleAddPost(newPost){
//    setPosts([newPost, ...posts])
// }

// const handleAddPost = React.useCallback(newPost=>{
//     setPosts([newPost, ...posts]);
// },[posts]);

// functionscount.add(handleAddPost);
// console.log(functionscount);
    if (!user) {
        return (
            <div>
                <Login setUser={setUser} />
            </div>
        );
    } else {
        return (
            <PostContext.Provider value ={{state, dispatch}}>
              <UserContext.Provider value = {user}>
                <Header user={user} setUser={setUser} />
                <CreatePost user={user}  //handleAddPost={handleAddPost}
                />
                <PostList posts={state.posts}/>
                {/* <button onClick ={()=> setCount(prev=> prev+1)}>{count}+</button> */}
            </UserContext.Provider>
            </PostContext.Provider>
            
        );
    }
}

export default App;



//const initialState = {user : ""}
//function useReducer(state, action){
      // Number of condition
//       switch(action.type){
//            case "LOGIN_USER":{
//               return {
//                 ...state,
//                 user: action.payload.username};
//            };
//       case "LOGOUT_USER":{
//             return{
//                 ...state,
//                 user: ""
//             }
//       }
//       default :
//       return state;
//     }
// }

// const Loginaction = {type : "LOGIN_USER", payload: { username : "vaibhav"}};

// const Logout = {type : "LOGOUT_USER"};
// Its take two arguments state and action
// (state, action) --> newState; // action = event

// console.log(userReducer(initialState, logoutAction));