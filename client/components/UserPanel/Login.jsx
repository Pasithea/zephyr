import React, { useState, useContext, useRef } from "react";
import { BreathContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const Login = () => {

  const { login, setLogin } = useContext(BreathContext);
  let history = useHistory();

  const handleChange = (e) => {
    setLogin(() => ({
      ...login,
      [e.target.name]: e.target.value
    }))
  }

  const loginClick = async (e) => {

    e.preventDefault();

    const body = { email: login.login_email, password: login.login_password };

    await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        // console.log('res:', res);
        if (res.status === 200) {
          // If login was successful 
          history.push("/welcome");
        } 
        return res.json();
      })
      .then((data) => {
        // console.log('data:', data);
        if (data && data.message) {
          setLogin(() => ({
            ...login,
            login_message: data.message
          }))
        } else if(data && data.fname) {          

          setLogin(() => ({
            login_email: '',
            login_password: '',
            login_message: '',
            logged_in: true,
            f_name: data.fname
          }))
        }
      })
      .catch((err) => console.log('Login fetch /api/login ERROR: ', err));

  }

  if (login.logged_in === true) {
    history.push("/welcome");
  }

  return(
    <div className="login">
      <h3>Login</h3>
        <p className="login-msg" className="login-msg">New to zephyr? <Link to="/signup">Create a new account.</Link></p>
        <input type="email" name="login_email" placeholder="Email" value={login.login_email} onChange={handleChange} required/>
        <input type="password" name="login_password" placeholder="Password" value={login.login_password} onChange={handleChange} required/>
        <p className="login-msg">{login.login_message}</p>
        <button type="button" onClick={loginClick}>Login</button>
    </div>
  )
}

export default Login;