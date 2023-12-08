import React from 'react'
import './loginunsuccessful.css'

const Loginunsuccessful = ({onReturn}) => {
    return (
        <div className='container-unsuccessful'>
            <h1>Login unsuccessful, please try again</h1>
            <p>Click here to go back Login page</p>
            <button onClick={onReturn}>Back to Login page</button>
        </div>
    )
}

export default Loginunsuccessful