// using bootstrap

import React from 'react';
class Login2 extends React.Component{
    state={
        name:"",
        email:"",
        password:"",
        mobile:""
    }
    nameHandler=(event)=>{
        this.setState({name:event.target.value})
    }
    emailHandler=(event)=>{
        this.setState({email: event.target.value})
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
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            <h4>Login Details</h4>
                        </div>
                        <div>
                            <div className="card-body">
                                <form onSubmit={this.loginHandler}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.nameHandler} placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.emailHandler} placeholder="Email ID"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.passwordHandler} placeholder="Password"/>
                                    </div>
                                    <div className="form-group">
                                        <input type="number" className="form-control" onChange={this.mobileHandler} placeholder="Mobile"/>
                                    </div>
                                    <input type="submit" value="Login" className="btn btn-success"/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}
export default Login2