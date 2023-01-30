import React, { Component } from 'react';
import {useState} from 'react';
// export default class Profile extends Component {
export default function Profile() {
  const [open1,setOpen1]=useState(false);
  const [open2,setOpen2]=useState(false);
  return (
    <div class="container d-flex justify-content-center align-items-center">

      <div class="card">

        <div class="upper">

          <img src="https://i.imgur.com/Qtrsrk5.jpg" class="img-fluid">
          </img>

        </div>

        <div class="user text-center">

          <div class="profile">

            <img src="https://i.imgur.com/JgYD2nQ.jpg" class="rounded-circle" width="80">
            </img>

          </div>

        </div>


        <div class="mt-5 text-center">

          <h4 class="mb-0">Benjamin Tims</h4>
          <span class="text-muted d-block mb-2">Los Angles</span>

          {/* <button class="btn btn-primary btn-sm follow">Follow</button> */}


          <div class="d-flex justify-content-between align-items-center mt-4 px-4">

            {/* <div class="stats">
              <h6 class="mb-0">Followers</h6>
              <span>8,797</span>

            </div> */}


            <div class="stats">
              <h6 class="mb-0">Age</h6>
              <span>20</span>

            </div>


            <div class="stats">
              
              <div classname="Menu-container" >
                <div className='Menu-trigger' >
                  <button className="btn btn-primary" onClick={()=>{setOpen1(!open1)}}>
                    Followers
                  </button>
                </div>
                {open1 && <div id = "abcd" >
                  <ul className="dropdown-menu.active" >
                    <li>Vrinda</li>
                    <li>Aryaveer</li>
                    <li>Shruti</li>
                    <li>Pawan</li>
                  </ul>
                </div>}
              </div>
              <div classname="Menu-container" >
                <div className='Menu-trigger' >
                  <button className="btn btn-primary" onClick={()=>{setOpen2(!open2)}}>
                    Followings
                  </button>
                </div>
                {open2 && <div id = "abcd" >
                  <ul className="dropdown-menu.active" >
                    <li>Vrinda</li>
                    <li>Aryaveer</li>
                    <li>Shruti</li>
                  </ul>
                </div>}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  )

}
// function DropdownItem(props){
//   return(
//     <li className='dropdownitem'>
       
//     </li>  
//   );
// }