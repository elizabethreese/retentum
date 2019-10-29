import React from 'react';
import Login from './login.jsx';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Config from '../firebaseConfig';

const firebaseAppAuth = Config.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Table extends React.Component {
    constructor() {
        super();
        this.state = 
        {
            prospects: [],
        }
    }

 componentDidMount() {
     fetch('/getProspectData')
     .then(response => response.json())
     .then(prospects => this.setState({ prospects })); 
     };

renderData() {
    return this.state.prospects.map((prospect, index) => {
        const { id, name, email, phone, caseType, comments, notes, status, createdAt } = prospect
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{caseType}</td>
                <td>{comments}</td>
                <td>{notes}</td>
                <td>{status}</td>
                <td>{createdAt}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
            </tr>
           )
        })
     }

render() { 
 
    return (
        // <p> {JSON.stringify(clients)}</p>
     <div>
        <div className="Logins">
            <Login 
            user={this.props.user}
            signInWithGoogle={this.props.signInWithGoogle}
            signOut={this.props.signOut}/>
        </div>
        <div>
            <h1 id='title'>Prospects:</h1>
            <table id='prospects'>
            <thead>
            <tr>
                <th>Client ID</th>
                <th>Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Case Type</th>
                <th>Comments</th>
                <th>Notes </th>
                <th>Status </th>
                <th>Entry Date</th>
            </tr> 
            </thead>
            <tbody>
              {this.renderData()}
            </tbody>
            </table>
         </div>
        </div>
    )
}
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Table);
