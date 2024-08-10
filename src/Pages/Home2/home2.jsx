import React, { useState } from "react";
import { login, logout } from '../../ReduxToolkit/slice';
import { useSelector, useDispatch } from "react-redux";

const Home2 = () => {
  const [name, setName] = useState('');
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const username = useSelector(state => state.auth.username);
  const dispatch = useDispatch()
  console.log(isAuthenticated, username, "???????????????")
  const handleLogin = () => {
    if (name.trim()) {
      dispatch(login(name))
      setName('')
    }
  }
  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <h2>Redux Toolkit </h2>
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

export default Home2;
