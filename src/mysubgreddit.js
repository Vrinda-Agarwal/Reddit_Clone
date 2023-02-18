import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import FormComponent from './mySubform';
function OpenFormButton(props) {
  const [flag, setflag] = useState(false);
  return (
    <>
    <Button onClick={()=>{setflag(!flag)}}>
      Add Subgreddit
    </Button>
    {(flag) ? (
      <FormComponent />
    ):(<></>)}
    </>
  );
}
export default OpenFormButton;
