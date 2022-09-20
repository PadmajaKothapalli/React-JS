import React from 'react'
function Comp2(props){
    return(
        <div>
            <h2>Component 2</h2>
            <pre>{JSON.stringify(props)}</pre>
            <h3>Property1: {props.prop1}</h3>
            <h4>Property2: {props.prop2}</h4>
        </div>
    )

}
export default Comp2