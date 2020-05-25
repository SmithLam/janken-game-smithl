import React from 'react'

export default function Box(props) {
    return (
        <div className={`box ${props.color}`}  >
        {/* start wrap */}
        my {props.name} box {props.color}
            



        {/* end wrap */}
        </div>
    )
}
