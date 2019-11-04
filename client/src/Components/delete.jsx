import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Button from 'react-bootstrap/Button'

class Delete extends React.Component {
    constructor(props) {
        super (props);
        this.state= {
            id: this.props.id
        }
    }

 delete(event) {
    let confirmDelete = window.confirm("Are you sure you want to delete this prospect for good?")
    if (confirmDelete) {
     fetch('/delete', {
         method: 'POST', 
         headers: {
            "Content-Type": 'application/json' 
         },
         body: JSON.stringify({
             id: this.state.id
         })
     })
     .then(function(response) {
        return 
    
    }).then(function(body) {
    
        console.log(body);
    }).then(window.location.reload())
    }};
 

    render() {
       return(
         <div className="deleteSection" style={{paddingTop: "22px"}}>
         <Button onClick={event => this.delete(event, 'id')} variant="secondary" size="sm">Delete</Button>
        </div>  
        )}
        

    };

export default Delete;