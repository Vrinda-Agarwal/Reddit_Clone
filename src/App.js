import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Login from './logincomponent.js'
import SignUp from './signupcomponent.js'
import Profile from "./Profile.js"
// import './user_profie.css'

function App() {
  const[flag,setflag]=useState(0);
  console.log(flag)
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              GREDDIT
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <button className="nav-link" 
                  onClick={()=>{setflag(0)}}
                  >
                    Login
                  </button >
                </li>
                <li className="nav-item">
                  <button className="nav-link" 
                  onClick={()=>{setflag(1)}}
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" element={(flag===0) ? (<Login />):(<SignUp />)} />
              {/* <Route path="/sign-in" element={<Login />} /> */}
              {/* <Route path="/sign-up" element={<SignUp />} /> */}
              <Route path="/profile" element={< NavBar />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
// function Appp() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Profile />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Route path="/contact" component={Contact} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App