import logo from './logo.svg';
import './App.css';
import React from 'react';
import ClickCounter from './components/useReducercases/higherorderComponents/clickCounter';
import HoverCounter from './components/useReducercases/higherorderComponents/HoverCounter';


  

function App() {
  return (
<div className="App">

<ClickCounter/>
<HoverCounter/>

    </div>
    );
  }




export default App;
