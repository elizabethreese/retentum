import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

class Notes extends React.Component {
    constructor(props) {
        super (props);
        this.state= {
            id: this.props.id,
            notes: this.props.notes,
        }
    this.notesHandleChange = this.notesHandleChange.bind(this);
    this.notesHandleSubmit = this.notesHandleSubmit.bind(this);
}

notesHandleChange(event, key) {
    this.setState({[key]: event.target.value});
};

notesHandleSubmit(event) {
    event.preventDefault();
    console.log('user has sent a note');
    console.log(this.state.id)
    fetch('/notes', {
    method: 'POST', 
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        id: this.state.id,
        notes: this.state.notes,
        
    })

 })
 .then(function(response) {
    return 

}).then(function(body) {

    console.log(body);
}).then(window.location.reload())
};

render () {
    const note = this.props
    console.log(this.state.notes)
    if (this.state.notes === !null){
        return (
            <div>
                <p>{this.state.notes}</p>
            </div>
        );
    } else {
    return(
    <div className="notes">
    <form onSubmit={this.notesHandleSubmit}>
        <label><input name="note" type="text" value={this.state.notes}
        onChange={event => this.notesHandleChange(event, 'notes')}/>  </label>
        <Button type="submit" variant="secondary" size="sm">Change Note</Button>
    </form>
    </div>)}}
}

export default Notes;