import React, { Component } from 'react'
import { useNavigate, Navigate } from 'react-router'
import { useEffect } from 'react';
// export default class Login extends Component {
export default function Login() {
  // render() {
  // const navigate = useNavigate();
  useEffect(() => {
    console.log("Hello");
  }, []);
  // const submit_function = (() => {
  //   console.log("submitting");
  //   <Navigate to="/profile"></Navigate>
  // })
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("submitting");
      return <Navigate to="/profile" />;
    }}>
    
      <h3>
        Login
      </h3>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>
      {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}
      <div className="d-grid">
        {/* <form action="/profile" method="POST">
          <input type="submit" />
        </form> */}


        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        
      </div>
      {/* <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p> */}
    </form>
  )
  // }
}