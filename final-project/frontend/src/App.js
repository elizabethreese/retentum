import React from 'react';
import './App.css';
import Form from './Components/form.jsx'
import Table from './Components/table.jsx'
import Login from './Components/login.jsx'
import Welcome from './Components/welcome.jsx'
import PrivateRoute from './Components/privateRoute.jsx'
import Config from "./firebaseConfig.js";
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends React.Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    Config.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;
    
    if(loading) {
      return <p>Loading...</p>
    }
  
  return (
  <div className="Routes">
     <Router>
     <Switch>
       <PrivateRoute exact path="/prospects" component={Table} authenticated={authenticated}/>
       <Route path="/contact-a-lawyer" component={Form} />
       <Route path="/" component={Welcome} /> 
    </Switch>
    </Router>
      </div>
  )};
};

export default App;
