//using react

import React from 'react'
class Login_Details extends React.Component{
    state={
        email:"",
        password:"",
        mobile:""
    }
    emailHandler=(event)=>{
        console.log(event.target);
        console.log(event.target.value);
        this.setState({email:event.target.value})
    }
    passwordHandler=(event)=>{
        this.setState({password:event.target.value})
    }
    mobileHandler=(event)=>{
        this.setState({mobile:event.target.value})

    }
    loginHandler=(event)=>{
        event.preventDefault()
        console.log(this.state);
    }
    render(){
        return (
        <div>
            <h1>Login details</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.loginHandler}>
                <label>Email Id:</label>
                <input type= "text" onChange={this.emailHandler}/><br/>
                
                <label>Password:</label>
                <input type= "text" onChange={this.passwordHandler}/><br/>
                
                <label>Mobile:</label>
                <input type="number" onChange={this.mobileHandler}/><br/><br/>

                <button onClick={this.state}>Submit</button>

            </form>
        
        </div>
    )}
}
export default Login_Details