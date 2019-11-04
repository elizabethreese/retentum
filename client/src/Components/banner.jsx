import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import React from 'react';


import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'

var divStyle= {
  backgroundImage: 'url(' + process.env.PUBLIC_URL + '/images/4.jpg' + ')'
}

class Banner extends React.Component{

render () {
return (
<div className="welcomebanner">
<Jumbotron style={divStyle} fluid> 
  <div className="bannerheader">
  <p>Full Service Case Management System</p></div>
  <div className="bannertext">
  <p>
    Whether you need a lawyer, or you are a lawyer looking to monitor <br/> your 
    prospective clients, we are here to help. 
  </p>
  </div>
  {/* <div className="bannerbutton">
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  </div> */}
  
</Jumbotron>
</div>  
)
}

}

export default Banner;