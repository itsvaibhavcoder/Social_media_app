import React from 'react';
import ReactDOM from 'react-dom';
//import Hooks from './hooks.js'; // Correct import statement: Use PascalCase for components
import Position from './mousePositionTrack.js';

ReactDOM.render(
  <div>
    {/* <Hooks /> */}
    <Position/>
  </div>,
  document.getElementById('root')
);

