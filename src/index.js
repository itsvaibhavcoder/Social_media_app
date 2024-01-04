import React from 'react';
import ReactDOM from 'react-dom';
//import Hooks from './hooks.js'; // Correct import statement: Use PascalCase for components
// import Position from './mousePositionTrack.js';

import API from './ApiUseEffectHook';

ReactDOM.render(
  <div>
    {/* <Hooks /> */}
    {/* {<Position/>} */}
    <API/>
  </div>,
  document.getElementById('root')
);

