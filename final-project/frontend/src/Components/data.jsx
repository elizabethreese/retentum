import React from 'react';

class Data extends React.Component {
    constructor() {
        super();
        this.state = 
        {
            data: [],
        }
    }

 componentDidMount() {
     fetch('/getProspectData')
     .then(response => response.json())
     .then(data => this.setState({ data })); 
     };

render() { 
    return (
        <p> {JSON.stringify(this.state.data)}</p>
    )
}
};

export default Data;