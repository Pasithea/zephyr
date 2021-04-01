import React, { useState, useContext } from "react";
import { BreathContext } from '../../context/Context';
import { useHistory } from "react-router-dom";

const Signup = () => {

  const { signup, setSignup } = useContext(BreathContext);
  let history = useHistory();

  const handleChange = (e) => {
    setSignup(() => ({
      ...signup,
      [e.target.name]: e.target.value
    }))
  }

  const signupClick = (e) => {
    e.preventDefault();

    const body = {
      email: signup.email,
      password: signup.password,
      f_name: signup.f_name,
      l_name: signup.l_name
    }

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {

          console.log('Signed up!');
          history.push("/success");

          setSignup(() => ({
            email: '',
            password: '',
            f_name: '',
            l_name: ''
          }))
        }        
      })
      .catch((err) => console.log('Login fetch /api/signup ERROR: ', err));

  }

  return(
    <div className="signup">
      <h3>Sign Up</h3>
        <input type="email" name="email" placeholder="Email" value={signup.email} onChange={handleChange} required/>
        <input type="password" name="password" placeholder="Password" value={signup.password} onChange={handleChange} required/>
        <input type="text" name="f_name" placeholder="First name" value={signup.f_name} onChange={handleChange} required/>
        <input type="text" name="l_name" placeholder="Last name" value={signup.l_name} onChange={handleChange} required/>
        <p className="login-msg">{signup.message}</p>
        <button type="button" onClick={signupClick}>Sign Up</button>
    </div>
  )
}

export default Signup;