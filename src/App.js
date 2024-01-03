import React from 'react';
// class component
// class App extends React.Component{
//    render(){
//     return(
//     <div>
//        <div>
//       <h1 style={st}>Hello World {year}</h1>
//       <p style = {{backgroundColor: 'red'}}>Happy new Year</p>
//     </div> 
//     </div>
//     );
//    }
// }
// Functional component
const App = () => {
  const year = 2024;
  const st = {
    color: 'red',
  };
  return (
    <div>
      <h1 style={st}>Hello World {year}</h1>
      <p style = {{backgroundColor: 'red'}}>Happy new Year</p>
    </div>
  );
};

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


export default App;
