import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import ContactForm from './Components/form.jsx'
import ProspectTable from './Components/table.jsx'
import Login from './Components/login.jsx'
import Welcome from './Components/welcome.jsx'
import Footer from './Components/footer.jsx'
import PrivateRoute from './Components/privateRoute.jsx'
import Config from './firebaseConfig.js'
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';

//Firebase Auth Imports
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';



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
  <div className="App">
  <div className="Routes">
     <Router>
     <Switch>
       <PrivateRoute exact path="/prospects" component={ProspectTable} authenticated={authenticated}/>
       <Route path="/contact-a-lawyer" component={ContactForm} />
       <Route path="/" component={Welcome} /> 
    </Switch>
    </Router>
      </div>
      <Footer />
      </div>
     
  )};
};

export default App;
