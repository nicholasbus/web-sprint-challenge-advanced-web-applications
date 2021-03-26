import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormData = {
  username: "",
  password: "",
};
const Login = () => {
  const { push } = useHistory();
  const [formData, setFormData] = useState(initialFormData);
  const [err, setErr] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // make a post request to retrieve a token from the api
    axios
      .post(`http://localhost:5000/api/login`, formData)
      .then((res) => {
        setErr(false);
        localStorage.setItem("token", res.data.payload);
        // when you have handled the token, navigate to the BubblePage route
        push("/bubble");
      })
      .catch((err) => {
        console.log(err.response);
        setErr(true);
      });
  };

  return (
    <>
      <h1>
        Welcome to the Bubble App!
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='username'
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='password'
            />
          </label>
          {err ? <p>Username or Password not valid</p> : null}
          <button>Log In</button>
        </form>
      </h1>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
