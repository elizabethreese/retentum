import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Login from './login.jsx';
import Notes from './Notes.jsx';
import Status from './status.jsx';
import Delete from './delete.jsx';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import Config from '../firebaseConfig';
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const firebaseAppAuth = Config.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

class ProspectTable extends React.Component {
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
     <div className="App">
        <div className="Logins">
            <Login 
            user={this.props.user}
            signInWithGoogle={this.props.signInWithGoogle}
            signOut={this.props.signOut}/>
        </div>
            <div className = "tableheader">
            <h1 style={{textAlign: "center", marginTop: "50px", marginBottom: "50px", color: "white", textShadow: "2px 2px 3px black"}}>Your Potential Clients:</h1>
            </div>
            <div className="tableArea">
            <Table striped bordered hover size="sm" sortable>
            <thead>
            <tr>
                <th style={{width: "300px" }}>Client ID <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('id')}/></th>
                <th style={{width: "200px"}}>Name <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('name')}/></th>
                <th style={{width: "100px"}}>Email Address  <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('email')}/></th>
                <th style={{width: "300px"}}>Phone Number  <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('phone')}/></th>
                <th style={{width: "200px"}}>Case Type  <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('caseType')}/></th>
                <th style={{width: "200px"}}>Comments  <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('comments')}/></th>
                <th style={{width: "60px"}}>Date  <FontAwesomeIcon icon={faSortDown} onClick={() => this.sortBy('createdAt')}/></th>
                <th>Notes </th>
                <th>Status </th>
                <th></th>
            </tr> 
            </thead>
            <tbody>
              {this.renderData()}
            </tbody>
            </Table>

         </div>
        </div>
    )
}
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(ProspectTable);
