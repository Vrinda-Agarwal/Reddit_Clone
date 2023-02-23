import { FunctionsOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { useState } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./mySubform.css"
function CommentForm(props) {
    const postid = props.post;
    console.log(postid)
    const [name, updatename] = useState('');
    // const [description, updateDescription] = useState('');
    const [comments, setComments] = useState('');
    const [userData, setUserdata] = useState('');
    const handleSubmit = Event => {
        console.log('username', name);
    }
    useEffect(() => {
        console.log("hmf")
        const user = JSON.parse(localStorage.getItem('Uname'));
        console.log(user);
        setUserdata(user);
    }, []);
    function handlechanges(e) {
        console.log("hkrf")
        // handleSubmit();
        e.preventDefault();
        console.log("comments");
        fetch("http://localhost:3001/commententry", {
            method: "POST",
            crossDomain: "True",
            headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                postid,
                // name,
                comments,
            })
        }).then((res) => {
            res.json().then((data) => {
                console.log(data);
                // localStorage.setItem('Uname', JSON.stringify(data.user))
            });
        })
    }

    return (
        <div className="form-popup">
            <form>
                <div className="btn-Display">
                    {/* <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    onChange={event => updatename(event.target.value)}
                /> */}
                    {/* <label>Description</label>
                <input
                    type="text"
                    placeholder="Enter Description"
                    onChange={event => updateDescription(event.target.value)}
                /> */}
                    <label>Comments</label>
                    <input
                        type="text"
                        placeholder="Enter Comments"
                        onChange={event => setComments(event.target.value)}
                    />
                    <button type="submit" onClick={handlechanges} >
                        Submit
                    </button>
                </div>
            </form>
        </div >
    );
}
export default CommentForm;
