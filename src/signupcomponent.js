import React, { useState } from 'react';
// export default class SignUp extends Component {
export default function SignUp(props) {
  // super(props);
  // this.state={
  //   fname:"",
  //   lname:"",
  //   email:"",
  //   username:"",
  //   contactno:1,
  //   age:1,
  //   password:"",
  // };
  const [fname, setFname] = useState(0);
  const [lname, setLname] = useState(0);
  const [email, setEmail] = useState(0);
  const [username, setUsername] = useState(0);
  const [contactno, setContactno] = useState(0);
  const [age, setAge] = useState(0);
  const [password, setPassword] = useState(0);
  // this.handleSubmit=this.handleSubmit.bind(this);
  const handleSubmit = (e) => {
    e.preventDefault();
    // const{fname,lname,username,email,contactno,age,password}=this.state;
    console.log(fname, lname, username, email, contactno, age, password);
    fetch("http://localhost:3001/register", {
      method: "POST",
      crossDomain: "True",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        fname,
        lname,
        username,
        contactno,
        age,
        email,
        password,
      })
    })
      .then(response => {
        console.log("hiii")
        return response.json()
      })
      .then((data) => {
        console.log(data, "userRegister");
      });
  }
  return (
    <form >
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={(e) => { setFname(e.target.value) }}
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input type="text" className="form-control" placeholder="Last name"
          onChange={(e) => { setLname(e.target.value) }} />
      </div>
      <div className="mb-3">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Username"
          onChange={(e) => { setUsername(e.target.value) }}
        // onChange={(e)=>set({username:e.target.value})}
        />
      </div>
      <div className="hi">
        <label>Email</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email"
          onChange={(e) => { setEmail(e.target.value) }}
        />
      </div>
      <div className="mb-3">
        <label>Contact No</label>
        <input
          type="contact"
          className="form-control"
          placeholder="Enter Contact No"
          onChange={(e) => { setContactno(e.target.value) }}
        />
      </div>
      <div className="mb-3">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          placeholder="Enter your Age"
          onChange={(e) => { setAge(e.target.value) }}
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={(e) => { setPassword(e.target.value) }}
        />
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>


      {/* <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p> */}
    </form>
  )
}