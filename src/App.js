import logo from './logo.svg';
import './App.css';

import React from 'react';


import CounterOne from './components/reducerhook/CounterOne';
import CounterTwo from './components/reducerhook/CounterTwo';
import ComponentA from './components/contexthook/ComponentA';
import ComponentB from './components/contexthook/ComponentB';
import ComponentC from './components/contexthook/ComponentC';
import ComponentE from './components/contexthook/ComponentE';

export const UserContext = React.createContext()     //exporting a context
export const BatchContext = React.createContext()




function App() {
  return (
    <div className="App">
     <CounterOne/>
     <CounterTwo/>
     <ComponentA/>
     <ComponentB/>
     <ComponentC/>
     <ComponentE/>

      
    </div>
  );
}

export default App;
