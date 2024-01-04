import React from "react";
import Login from './components/Login';
function App(){
    let user = "";
    if(!user){
        return <div>
        <Login/>
    </div>
    }
    else{
        return (
            <div>app</div>
        );
    }
}

export default App;