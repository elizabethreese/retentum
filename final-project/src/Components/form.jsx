import React from 'react';

class Form extends React.Component { 
    constructor(props) { 
        super (props); 
        this.state= { 
          name: '', 
          email: '',
          phone: '', 
          caseType: '', 
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
        alert('form is submitting');
        
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
                <select name="caseType" value={this.state.caseType} onChange={event => this.handleChange(event, 'caseType')} >
                <option value="personalInjury">Personal Injury </option>
                <option value="criminalDefense">Criminal Defense</option>
                <option value="businessLit">Business Litigation</option>
                <option value="familyLaw">Family Law</option>
                <option value="other">Other/Unknown</option>
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