import React, { useState } from "react";
import { LoginAction, LogoutAction } from "../../Redux/Actions/action";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [name, setName] = useState('');
  const { isAuthenticated, username } = useSelector(state => state);
  const dispatch = useDispatch()

  const handleLogin = () => {
    if (name.trim()) {
      dispatch(LoginAction(name))
      setName('')
    }
  }
  const handleLogout = () => {
    dispatch(LogoutAction())
  }

  
  return (
    <>
    <h2>Redux Store</h2>
      {
        isAuthenticated ? (
          <>
            <h3>Welcome, {username}</h3>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) :
          (
            <div>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <button onClick={handleLogin}>Login</button>

            </div>
          )
      }

    </>
  );
};

export default Home;
