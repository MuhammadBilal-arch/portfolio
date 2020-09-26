import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'
import Backdrop from './Components/Backdrop/Backdrop'
function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Main/>
      <Backdrop/>
    </div>
  );
}

export default App;
