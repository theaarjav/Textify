import React from 'react'

export default function Alert(props) {
    let mystyle={
        height:"50px"
    }
    return (
        <div style={mystyle}>

        {props.alert&&<div class={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.message}
        </div>}
        </div>
    )
}
