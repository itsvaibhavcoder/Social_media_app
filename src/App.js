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

export default App;
