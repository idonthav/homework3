import React from 'react'
import './logout.css'

const Logout = ({ onLogout }) => {
    return (
        <div className='container'>
            <h1>Welcome! You are logged in!</h1>
            <p>Click here to logout</p>
            <button type='button' onClick={onLogout}>Logout</button>
        </div>
    )
}

export default Logout