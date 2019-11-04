import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from 'react';
import { NavLink, Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

class Login extends React.Component { 
      
    
    render() {
        
        const {
            user,
            signOut,
            signInWithGoogle,
        } = this.props;

        return (
            <div className="App">
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" bg="dark">
               <Navbar.Brand href="/"><h2 style={{fontWeight: "bolder"}}>Retentum  <FontAwesomeIcon icon={faBalanceScaleRight} /></h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
               <Navbar.Text>  
                <div className="Logins">
                    {
                        user
                            ? <p>Hello, {user.displayName}</p>
                            : <p>Please sign in to view your prospects.</p>
                    }
                    {
                        user
                            ? <Button className = "logins"  onClick={signOut} variant="light" size="sm">Sign out</Button>
                            : <Button className = "logins" onClick={signInWithGoogle} variant="light" size="sm">Sign-In</Button>
                    }
                </div>
                </Navbar.Text>
                </Navbar.Collapse>              
            </Navbar>
            </div>
   )
    }
};

export default Login;
