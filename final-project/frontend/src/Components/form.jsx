import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Login from './login.jsx';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'
import FormGroup from 'react-bootstrap/FormGroup'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Config from '../firebaseConfig';

const firebaseAppAuth = Config.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class ContactForm extends React.Component { 
    constructor(props) { 
        super (props); 
        this.state= { 
          name: '', 
          email: '',
          phone: '', 
          caseType: 'Personal Injury', 
          comments: '',
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, key) {
            this.setState({[key]: event.target.value});
    };

    handleSubmit(event) {
        event.preventDefault(); 
        console.log('form is submitting');
        console.log(this.state.name)
        // var state = this.state;
        fetch('/prospects', {
            method: 'POST', 
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name, 
                email: this.state.email, 
                phone: this.state.phone, 
                caseType: this.state.caseType,
                comments: this.state.comments,
            })
        })
        .then(function(response) {
            return 

        }).then(function(body) {
        
            console.log(body);
        });
        alert("Thank you for your interest. Someone will be in contact with you shortly!")
    };

    render() {
        return (
            <div>
             <div className="Logins">
            <Login 
            user={this.props.user}
            signInWithGoogle={this.props.signInWithGoogle}
            signOut={this.props.signOut}/>
        </div>
        <div className="formtext">
            <h1 style={{textShadow: "2px 2px 3px black"}}>Need a Lawyer?</h1>
            <p>We are here to help! Fill out the form below, and we will provide your information to our lawyers.</p>
        </div>
        <div className="formArea">
            <Form onSubmit={this.handleSubmit} className="form">
            <Col sm>
            <Form.Group controlId="nameInput">
                <Form.Label>Name</Form.Label>
                <Form.Control input name="name" type="text" value={this.state.name} onChange={event => this.handleChange(event, 'name')}>
                </Form.Control>
                </Form.Group>
            <Form.Group controlId="emailInput">
                <Form.Label>Email Address</Form.Label>
                <Form.Control input name="email" type="text" value={this.state.email} onChange={event => this.handleChange(event, 'email')}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="phoneInput">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control input name="phone" type="number" value={this.state.phone} onChange={event => this.handleChange(event, 'phone')}>
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="caseInput">
                <Form.Label>Case Type</Form.Label>
                <Form.Control as="select" name="Case Type" value={this.state.caseType} onChange={event => this.handleChange(event, 'caseType')} >
                <option value="Personal Injury">Personal Injury </option>
                <option value="Criminal Defense">Criminal Defense</option>
                <option value="Business Litigation">Business Litigation</option>
                <option value="Family Law">Family Law</option>
                <option value="Other/Unknown">Other/Unknown</option>
                </Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Comments</Form.Label>
                <Form.Control input name="comments" type="text" value={this.state.comments} onChange={event => this.handleChange(event, 'comments')}>
                </Form.Control>
                </Form.Group>
                <Button variant="dark" type="submit">Submit</Button>
                </Col>
            </Form>
            </div>
            </div>
        )
    }
    }

    export default withFirebaseAuth({
        providers,
        firebaseAppAuth,
    })(ContactForm);
    