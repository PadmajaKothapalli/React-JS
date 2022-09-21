import React from 'react'
class TableCart extends React.Component{
    state={
        product:{
            product_Name:"ID116 Smartwatch",
            price: 349, 
            image:"https://images.meesho.com/images/products/135274197/3wdpo_512.webp",
            qty:1
        }

    }
    incrhandler=()=>{
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty+1
            }
        })
    }
    dcrhandler=()=>{
        this.setState({
            product: {
                ...this.state.product,
                qty: this.state.product.qty-1
            }
        })
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                <div className="table">
                <table className="table">
                        <thead className="bg-dark text-white">
                            <th>Name</th>&nbsp;
                            <th>Image</th>&nbsp;&nbsp;
                            <th>Price</th>&nbsp;&nbsp;
                            <th>Quantity</th>&nbsp;&nbsp;
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.product_Name}</td>&nbsp;&nbsp;
                                <td> <img src={this.state.product.image} height="100px" alt="" /> </td>&nbsp;&nbsp;
                                <td>{this.state.product.price}</td>&nbsp;&nbsp;
                                <td><i className="fa fa-minus-circle" onClick={this.dcrhandler}></i> {this.state.product.qty} <i className="fa fa-plus-circle" onClick={this.incrhandler}></i></td>&nbsp;&nbsp;
                                <td>{this.state.product.price * this.state.product.qty}</td>
                            </tr>
                        </tbody>
                        <button onClick={this.incrhandler}>+</button>
                        <button onClick={this.dcrhandler}>-</button>
                    </table>
                </div>
            </div> 
        </div>
        </div>
    }
} 
export default TableCart