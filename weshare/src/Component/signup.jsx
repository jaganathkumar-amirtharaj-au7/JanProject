import { Component,Fragment } from "react";
import React from 'react'
import './css/signup.css'
import { Form,Button} from 'react-bootstrap';
import axios from 'axios'

const url="http://localhost:3004/users";

class Siginup extends Component{
state={
  "firstname":"",
  "lastname":"",
  "email":"",
  "phonenumber":0,
  "password":"",
  "length":0
}

handleChangeFirstname=(e)=>this.setState({"firstname":e.target.value})
handleChangeLastname=(e)=>this.setState({"lastname":e.target.value})
handleChangeEmail=(e)=>this.setState({"email":e.target.value})
handleChangePhoneNumber=(e)=>this.setState({"phonenumber":e.target.value})
handleChangePassword=(e)=>this.setState({"password":e.target.value})
handleFormSubmition=async()=>{
  
  await axios.post(url,{
    "id":this.state.length,
    "firstname":this.state.firstname,
    "lastname":this.state.lastname,
    "email":this.state.email,
    "phonenumber":this.state.phonenumber,
    "password":this.state.password
    
});
this.setState({
  "firstname":"",
  "lastname":"",
  "email":"",
  "phonenumber":0,
  "password":"",
  "length":0
})

}
async componentDidMount(){
  const {data}=await axios.get(url);
  
  this.setState({"length":data.length+1})
}
render(){
    return(
<Fragment>
<center>
    <div className="signup_container">
    <Form >
    <div className="first_last_container">
    <input id="first" placeholder="First name" onChange={(e)=>this.handleChangeFirstname(e)} />
  <input id="last" placeholder="Last name" onChange={(e)=>this.handleChangeLastname(e)} />
    </div>
    <input id="signup_email" type="email" placeholder="Enter Email Address" onChange={(e)=>this.handleChangeEmail(e)} />
    <br/>
    <input id="mono" type="Number" placeholder="Phone number" onChange={(e)=>this.handleChangePhoneNumber(e)} />
    <br/>
    <input id="signup_pass" type="password" placeholder=" Password" onChange={(e)=>this.handleChangePassword(e)} />
    <br/>
  <Button id="btn" onClick={e=>this.handleFormSubmition()} >
    Siginup
  </Button>
</Form>
    </div>
    </center>     
</Fragment>
    )
}
}

export default Siginup;