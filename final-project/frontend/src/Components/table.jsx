import React from 'react';
import Login from './login.jsx';
import Notes from './Notes.jsx';
import Status from './status.jsx';
import Delete from './delete.jsx';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Config from '../firebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const firebaseAppAuth = Config.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = 
        {
            prospects: [],
        }
    this.compareBy.bind(this);
    this.sortBy.bind(this);
    }

 componentDidMount() {
     fetch('/getProspectData')
     .then(response => response.json())
     .then(prospects => this.setState({ prospects })); 
     };

renderData() {
    return this.state.prospects.map((prospect, index) => {
        var { id, name, email, phone, caseType, comments, createdAt, notes, status } = prospect
        return (
            <tr key={id}>
                <td >{id}</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{caseType}</td>
                <td>{comments}</td>
                <td>
                {createdAt}
                </td>
                <td>
                    <Notes id={id} notes={notes}/></td> 
                <td>
                    <Status id={id} status={status}/>
                </td>
                <td>
                    <Delete id={id}/>
                </td>
            </tr>
           )
        })
     }

compareBy(key) {
    return function (a,b) {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
    };
}

sortBy(key) {
    let arrayCopy = [...this.state.prospects];
    arrayCopy.sort(this.compareBy(key));
    this.setState({prospects: arrayCopy});
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
                <th>Client ID <button onClick={() => this.sortBy('id')}>Sort</button></th>
                <th>Name<button onClick={() => this.sortBy('name')}>Sort</button></th>
                <th>Email Address<button onClick={() => this.sortBy('email')}>Sort</button></th>
                <th>Phone Number<button onClick={() => this.sortBy('phone')}>Sort</button></th>
                <th>Case Type<button onClick={() => this.sortBy('caseType')}>Sort</button></th>
                <th>Comments<button onClick={() => this.sortBy('comments')}>Sort</button></th>
                <th>Entry Date<button onClick={() => this.sortBy('createdAt')}>Sort</button></th>
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
