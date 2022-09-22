//using constructor, super, props, state
import React from 'react'
class Registration extends React.Component{
    constructor(props){
    super(props)
    this.state={
        username:"",
        email:"",
        mobile:"",
        password:""
    }
}
updateHandler=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}
SubmitHandler=(event)=>{
    event.preventDefault();
    console.log(this.state);
}
    render(){
        return <div className="container mt-4">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col mt-4">
                    <div className="card">
                        <div className="card-header bg-primary text-white">Registration Form</div>
                        <div className="card-body">
                            <form onSubmit={this.SubmitHandler}>
                                <div className="form-group">
                                    <input type="text" className="form-control" name="username" onChange={this.updateHandler} placeholder="username"/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" onChange={this.updateHandler} placeholder="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" name="mobile" onChange={this.updateHandler} placeholder="mobile"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" onChange={this.updateHandler} placeholder="password"/>
                                </div>
                                <div>
                                    <input type="radio"/>Male
                                    <input type="radio"/>Female
                                </div>
                                <input type="submit" value="SignUp" className="btn btn-primary"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    }
}
export default Registration