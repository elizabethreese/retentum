import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Config from '../firebaseConfig';
import Login from './login.jsx';

// const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseAppAuth = Config.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Welcome extends React.Component {

render () {
return (
    <div className="App">
      <header className="App-header">
        <Login 
         user={this.props.user}
         signInWithGoogle={this.props.signInWithGoogle}
         signOut={this.props.signOut}/> 
        <h1>Retentum Legal Case Management System</h1>
      </header>
      </div>
)}};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Welcome);