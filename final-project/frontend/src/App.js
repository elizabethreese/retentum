import React from 'react';
import './App.css';
import Form from './Components/form.jsx'
import Table from './Components/table.jsx'
import { NavLink, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Retentum Legal Case Management System</h1>
      </header>
      <div className="Navigation">
       <NavLink to="/prospects">My Prospects</NavLink> 
       <NavLink to="/">Form</NavLink>
       </div>
      <div className="Routes">
     <Switch>
       <Route path="/prospects" component={Table} />
       <Route path="/" component={Form} />
    </Switch>
      </div>
    </div>
  );
}
export default App;
