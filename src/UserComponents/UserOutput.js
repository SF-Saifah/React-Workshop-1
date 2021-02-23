import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='output'>
            <p onClick={props.click}>paragraph {props.number} = Username : {props.username} </p>
        </div>
    )
}

export default userOutput

