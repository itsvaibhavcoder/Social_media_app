import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';

//properties passed 
// function header(props){
//   return <h1>Hello {props}</h1>
// }
//Map function
// function App(){
//   const people = ["John", "Dave","Jane"];
//   return(
//     <ul>{
//       people.map(person=> <li>{person}</li>)
//       }
//     </ul>
//   ) 
// }

// function Person(props){
//   function handlePersonClick(event){
//     alert('props.person')
//     console.log(event)
//   }
//   return <li onClick ={handlePersonClick}>{props.Person}</li>
// }

// React hooks
 function App(){
  const inputState = React.useState('some text');
  const inputValue = inputState[0];
  // function to change to input states
  const setInputValue = inputState[1];
  function handleInputChange(event){
    //value = event.target.value;
    //console.log(value);
    setInputValue(event.target.value);
  }
  return (
    <div>
      <input onChnage ={handleInputChange}/>
      <p>{inputValue}</p>
    </div>
  )
 }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* {header('John')}
    <footer>Copyright 2024</footer> */}
    <App/>
  </div>,
  root
);
