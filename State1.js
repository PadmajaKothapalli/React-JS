import React from 'react'
class Message extends React.Component{
   state={
      message:"Hello"
   }
   gmhandler=()=>{
      this.setState({message:"Have Coffee"})
   }
   gnhandler=()=>{
      this.setState({message:"Go to Bed"})
   }
   render(){

      return <div>
            <h1>Message: {this.state.message}</h1>
            <button onClick={this.gmhandler}>Good Morning</button>&nbsp;
            <button onClick={this.gnhandler}>Good Night</button>
      </div>
   }
}
export default Message