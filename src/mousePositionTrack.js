import React from 'react';

function Position(){
const [mousePosition, setMousePosition] = React.useState({x:0, y:0});

React.useEffect(()=>{
    document.addEventListener('mousemove', hanldeMouseMove);

    return ()=>{
        document.removeEventListener("mousemove", hanldeMouseMove);
    }
}, []) // [] dependency array

function hanldeMouseMove(event){
    setMousePosition({x:event.pageX, y: event.pageY});
}
return(
 <div>
  <p>
    X: {mousePosition.x}, Y: {mousePosition.y}
  </p>
 </div>
);
}

export default Position;