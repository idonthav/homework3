import React, { useState } from "react";
import './login.css'
import { FaUser, FaLock } from "react-icons/fa";


const Login = ({onLogin}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        if (username === 'username' && password === 'password') {
            onLogin(true)
        } else {
            onLogin(false)
        }
    }
    return (
        <div className="wrapper">
            <form>
                <h1>Login</h1>
                {/* Form: username */}
                <div className="input-box">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <FaUser className="icon"/>
                </div>
            
                {/* Form: password */}
                <div className="input-box">
                    <input
                            type="text"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                    <FaLock className="icon"/>
                </div>
                    
                
                {/* Remember me */}
                <div className="remember-forget">
                    <label><input type="checkbox" />Rememver me</label>
                    <a href="#">Forget password?</a>
                </div>
                <button type="button" onClick={handleLogin}>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login