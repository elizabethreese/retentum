import React from 'react';
import Login from './login.jsx';
import Notes from './Notes.jsx';
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
        const { id, name, email, phone, caseType, comments, createdAt, notes } = prospect
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{caseType}</td>
                <td>{comments}</td>
                <td>{createdAt}</td>
                <td><Notes id={id} /> </td>
                <td><form><label><select name="Status">
                    <option>Open</option>
                    <option>Closed</option>
                    <option>Not Applicable</option>
                    </select></label></form></td>
            
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
                <th>Entry Date</th>
                <th>Notes </th>
                <th>Status </th>
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
