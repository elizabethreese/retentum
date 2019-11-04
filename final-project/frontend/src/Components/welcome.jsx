import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Config from '../firebaseConfig';
import Login from './login.jsx';
import Banner from './banner.jsx';

//Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'



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
         <Banner />
      </header>

      <table id="welcomeTable">
        <tr>
        <td>
        <h2>In Need of a Lawyer?</h2>
        <img className="image" src={process.env.PUBLIC_URL + '/images/lawyer.jpg'} style={{width: "200px", padding: "15px"}}></img>
        <p>Click the button below to visit our contact form now.</p>
        <Button variant="dark" href="/contact-a-lawyer">Contact a Lawyer!</Button>
        </td>
        <td>
        <h2>Need to check your prospects?</h2>
        <img className="image" src={process.env.PUBLIC_URL + '/images/computer1.jpg'} style={{width: "200px", padding: "15px"}}></img>
        <p>Sign in and then visit your dashboard by clicking the button below.</p>
        <Button variant="dark" href="/prospects">See My Prospects</Button>
        </td>
      </tr>
      </table>
      </div>
)}};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Welcome);