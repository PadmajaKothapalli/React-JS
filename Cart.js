import React from 'react'
class Product extends React.Component{
    state={
        product: {
            product_Name: "Ballerinas",
            price: 366,
            image:"https://images.meesho.com/images/products/153795148/pdqgj_512.webp",
            qty: 1
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
    decrhandler=()=>{
        this.setState({
            product:{
                ...this.state.product,
                qty: this.state.product.qty-1
            }
        })
    }
    render(){
        return (
            <div>
                <pre>{JSON.stringify(this.state.product)}</pre>
                <h2>Product_Name:{this.state.product.product_Name}</h2>
                <h2>Price: {this.state.product.price}</h2>
                <img src={this.state.product.image} height="250px" alt="" />&nbsp;&nbsp;
                <button onClick={this.incrhandler}>+</button>
                <button onClick={this.decrhandler}>-</button>
                <i className="fa fa-minus-square" onClick={this.decrhandler}></i> {this.state.product.qty}<i onClick={this.incrhandler} className="fa fa-plus-square"></i>
                <h5>Total: {this.state.product.qty * this.state.product.price}</h5>
        </div>
        )
     }

}
export default Product;