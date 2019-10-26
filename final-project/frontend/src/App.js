import React from 'react';
import './App.css';
import Form from './Components/form.jsx'
import Data from './Components/data.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Retentum Legal Case Management System</h1>
      </header>
      <div className="FormArea">
        <Form />
        <Data />
      </div>
    </div>
  );
}
export default App;
