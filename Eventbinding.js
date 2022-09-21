import React from 'react'
class Event extends React.Component{
    state={
        emp_Sal:45000
    };
    btnHandler=(value)=>{
        console.log("Reading Button data...", value);
        this.setState({
            emp_Sal:45000 + value,
        });
    }
    render(){
        return <div> 
                <h1>Employee Sal:{this.state.emp_Sal}</h1>
                <button onClick={this.btnHandler.bind(this,10000)}> Hike 10k</button>
                <hr/>
                <button onClick={this.btnHandler.bind(this,25000)}> Hike 250k</button>
                <hr/>
                <button onClick={this.btnHandler.bind(this,0)}>Hike 0</button>
        </div>
    }
}
export default Event