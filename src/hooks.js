import React from 'react';

function Hooks(){
    const [inputValue, setInputValue] = React.useState("");
function handleInputChange(event){
    //value = event.target.value;
    //console.log(value);
    setInputValue(event.target.value);
  }
    // Old javascript methods
    // const inputState = React.useState("");
    // const inputValue = inputState[0];
    // function to change to input states
    //const setInputValue = inputState[1];
    
    // Modern ES6 method
    // Array destructuring
    // It will work same
    return (
      <div>
        <input onChange ={handleInputChange}/>
        <p>{inputValue}</p>
      </div>
    )
   }
  
 export default Hooks;