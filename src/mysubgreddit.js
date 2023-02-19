import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect } from 'react';
import FormComponent from './mySubform';
import axios from 'axios';
function OpenFormButton(props) {
  const [flag, setflag] = useState(false);
  const[subG,setsubG]=useState([]);
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem('Uname'));
    axios.post("http://localhost:3001/getmysubgreddits",{
        user: user
    }).then((res)=>{
      const arr=res.data.subarray
      setsubG(arr);
      console.log(arr);
    })

    }
  , []);
  return (
    <div>
      <Popup trigger={
        <>
          <Button onClick={() => { setflag(!flag) }}>
            Add Subgreddit
          </Button>
          {(flag) ? (
            <FormComponent />
          ) : (<></>)}
        </>}></Popup>
      <div>
        </div>
    </div>
  );
}
export default OpenFormButton;
