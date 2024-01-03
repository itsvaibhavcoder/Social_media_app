import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App.js';

//properties passed 
function header(props){
  return <h1>Hello {props}</h1>
}
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

function Person(props){
  function handlePersonClick(event){
    alert('props.person')
    console.log(event)
  }
  return <li onClick ={handlePersonClick}>{props.Person</li>
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
