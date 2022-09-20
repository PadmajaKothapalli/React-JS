import React from 'react'
class Data extends React.Component{
    state={
      Msg:"Hello"
    }
    gmhandler=()=>{
        this.setState({Msg:"Welcome"})
    }
    gehandler=()=>{
        this.setState({Msg:"Good Bye!"})
    }
    render(){

        return <div>
                <pre>{JSON.stringify(this.state)}</pre>
                <h3>Msg: {this.state.Msg}</h3>
                <button onClick={this.gmhandler}>ON</button>&nbsp;
                <button onClick={this.gehandler}>OFF</button>
        </div>
    }
}
export default Data