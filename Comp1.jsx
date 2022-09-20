import React from 'react'
import Comp2 from './Comp2'
function Comp1(){
    let a="Hii"
    let b="Namaste"
    return <div>
        <h1>Component 1</h1> <hr/>
        <Comp2 prop1={a} prop2={b}/>
    </div>
}
export default Comp1