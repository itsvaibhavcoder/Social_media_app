import React from "react";
import Login from './components/Login';
import Header from "./components/Header";
function App(){
    // let user = "";
    const [user, setUser]= React.useState('vaibhav');
    // React.useEffect(()=>{
    //     document.title = user;
    // }, [user]);
    React.useEffect(()=>{
      document.title = user? `${user}'s Feed`: `please Login`;
    },[user]);

    if(!user){
        return <div>
        <Login setUser={setUser}/>
    </div>
    }
    else{
        return <>
        <Header user ={user} setUser={setUser}/>
        </>
    }
}

export default App;