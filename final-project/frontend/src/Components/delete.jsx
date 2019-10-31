import React from 'react';

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
         <div className="deleteSection">
         <button onClick={event => this.delete(event, 'id')}>Delete</button>
        </div>  
        )}
        

    };

export default Delete;