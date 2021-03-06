import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class Status extends React.Component {
    constructor(props) {
        super (props);
        this.state= {
            id: this.props.id, 
            status: this.props.status,
        }

        this.statusHandleSubmit = this.statusHandleSubmit.bind(this);
    }
    
    statusHandleChange(event, key) {
        this.setState({[key]: event.target.value});
    };

    statusHandleSubmit(event) {
        event.preventDefault();
        console.log('user has changed the status');
        fetch('/status', {
        method: 'POST', 
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            id: this.state.id,
            status: this.state.status,
        })
     })
     .then(function(response) {
        return 
    console.log(this.state.status)
    }).then(function(body) {
    
        console.log(body);
    }).then(window.location.reload())
    };
    
    render () {
        if (this.state.status === !null){
            return (
                <div>{this.state.status}</div>
            )
        } else {
        return(
       <div className="status">
       <form onSubmit={this.statusHandleSubmit}>
           <label><select name="Status" value={this.state.status} onChange= {event => this.statusHandleChange(event, 'status')}>
                    <option value="Open">Open</option>
                    <option value="Closed">Closed</option>
                    <option value="Not Applicable">N/A</option>
                    </select>
                    <div style={{paddingTop: "14px"}}>
                    <Button type="submit" variant="secondary" size="sm">Submit</Button>
                    </div>
                    </label></form>
        </div>
        )}}
    };
    
    export default Status;
    

