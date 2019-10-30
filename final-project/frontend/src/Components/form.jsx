import React from 'react';

class Form extends React.Component { 
    constructor(props) { 
        super (props); 
        this.state= { 
          name: '', 
          email: '',
          phone: '', 
          caseType: 'Personal Injury<', 
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
            <form onSubmit={this.handleSubmit}>
                <label>Name
                <input name="name" type="text" value={this.state.name} onChange={event => this.handleChange(event, 'name')} />
                </label>
                <label>Email Address
                <input name="email" type="text" value={this.state.email} onChange={event => this.handleChange(event, 'email')}/>
                </label>
                <label>Phone Number 
                <input name="phone" type="number" value={this.state.phone} onChange={event => this.handleChange(event, 'phone')}/>
                </label>
                <label>Case Type
                <select name="Case Type" value={this.state.caseType} onChange={event => this.handleChange(event, 'caseType')} >
                <option value="Personal Injury">Personal Injury </option>
                <option value="Criminal Defense">Criminal Defense</option>
                <option value="Business Litigation">Business Litigation</option>
                <option value="Family Law">Family Law</option>
                <option value="Other/Unknown">Other/Unknown</option>
                </select>
                </label>
                <label>Comments
                <input name="comments" type="text" value={this.state.comments} onChange={event => this.handleChange(event, 'comments')}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        )
    }
    }

export default Form; 