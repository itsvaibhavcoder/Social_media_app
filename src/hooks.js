import React from 'react';

//function Hooks(){
//     const [inputValue, setInputValue] = React.useState("");
// function handleInputChange(event){
//     //value = event.target.value;
//     //console.log(value);
//     setInputValue(event.target.value);
//   }
//     // Old javascript methods
//     // const inputState = React.useState("");
//     // const inputValue = inputState[0];
//     // function to change to input states
//     //const setInputValue = inputState[1];
    
//     // Modern ES6 method
//     // Array destructuring
//     // It will work same
//     return (
//       <div>
//         <input onChange ={handleInputChange}/>
//         <p>{inputValue}</p>
//       </div>
//     )
//    }

function Hooks(){
    // function handleChangelanguage(){
    //     setDeveloper({
    //         language: 'javascript',
    //         yearExperience:0
    //     });
    // }

    // function handleChangeYearsExperience(event){
    //     setDeveloper({
    //         ...developer, // only want to change YOE
    //         yearExperience : event.target.value
    //     });
    // }
    
    function handleToggleEmployement(){
        setDeveloper(prevState =>({
            ...prevState,
            isEmployed: !prevState.isEmployed
        }));
    }
    // const [language, setLanguage] = React.useState('python')
    // const [yearExperience, setYearsExperience] = React.useState(0);
    
    const [developer, setDeveloper] = React.useState({
        language: "Python",
        setYearsExperience : 0,
        isEmployed: false
    });

    return(
      <div>
        <button onClick ={handleToggleEmployement}>Toggle Employment status</button>
        <button onClick ={()=> setDeveloper({
            language: 'javascript',
            yearExperience:0
        })}>Change language</button>
        {/* <button onClick ={()=> setLanguage('javascript')}>Change langauge</button> */}
        {/*while working with input always event used  */}
        {/* <input 
        type ="number" onChange = {event=> setYearsExperience(event.target.value)}
        /> */}
        <input 
        type ="number"
        onChange = {event => setDeveloper({
            ...developer, // only want to change YOE
            yearExperience : event.target.value
        })}/>
        <p>I am learning {developer.language}</p>
        <p>I have {developer.yearExperience} year of exeperience</p>
        <p>Employment status : {developer.isEmployed ? "Employed" : "Unemployed"}</p>
      </div>
    );
}
  
 export default Hooks;