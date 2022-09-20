import React from 'react'
class Quantity extends React.Component{
    state={
        qty:0
    }
    incrhandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    dcrhandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    render(){
        return <div>
            <h3>Product Quantity:{this.state.qty+1}</h3><br></br>
            
            <button onClick={this.incrhandler}>+</button>
            <button onClick={this.dcrhandler}>-</button>
        </div>
    }
}
export default Quantity;