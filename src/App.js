import './App.css';
import React, { useState } from 'react'
import Login from './components/login/login'
import Logout from './components/logout/logout'
import Loginunsuccessful from './components/loginunsuccessful/loginunsuccessful'



// const App = () => {
//   const [isLoggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//   };

//   const handleLogout = () => {
//     setLoggedIn(false);
//   };

//   return (
//     <div>
//       {isLoggedIn ? (
//         <Logout onLogout={handleLogout} />
//       ) : (
//         <Login onLogin={handleLogin} />
//       )}
//     </div>
//   )
// }


const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = (loginSuccessful) => {
    if (loginSuccessful) {
      setLoggedIn(true);
      setLoginFailed(false);
    } else {
      setLoggedIn(false);
      setLoginFailed(true);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setLoginFailed(false);
  };

  const handleReturnToLogin = () => {
    setLoggedIn(false);
    setLoginFailed(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <Logout onLogout={handleLogout} />
      ) : (
        <>
          {loginFailed ? (
            <Loginunsuccessful onReturn={handleReturnToLogin} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
