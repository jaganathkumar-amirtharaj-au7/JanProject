
import { Form,Button } from 'react-bootstrap';
import React, { Component,Fragment } from 'react'
import './css/login.css'
class Login extends Component{
state={
  "email":"",
  "password":""
}
handleChangeEmail=e=>this.setState({"email":e.target.value})
handleChangePassword=e=>this.setState({"password":e.target.value})

    render(){
        return(
<Fragment>
    <center>      
    <div id="div_container" >
    <Form>
    <input id="email" type="email" placeholder="Enter Email Address" onChange={e=>this.handleChangeEmail(e)}/>
    <br/>
    <input id="pass" type="password" placeholder="Enter Password" onChange={e=>this.handleChangePassword(e)} />
    <br/>
    <Button id="btn"  onClick={e=>console.log(this.state)}>Login</Button>
    </Form>
    </div>
    </center>      
</Fragment>
    )
        }
}
export default Login