import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LaunchIcon from '@mui/icons-material/Launch';
import FormPart from "./postForm.js"
import CommentForm from "./commentForm.js"
function SubgredditPage() {
    const { subGname } = useParams();
    const [subG, setsubG] = useState([]);
    const [post, setPost] = useState([]);
    const [load, setLoad] = useState(0);
    const [load1, setload1] = useState(0);
    const [flag, setflag] = useState(0);
    const [flag1, setflag1] = useState(0);
    const[comment,setComment]=useState([]);
    useEffect(() => {
        axios.post("http://localhost:3001/displaysub", {
            subG: subGname
        }).then((res) => {
            const arr = res.data.subarray
            setsubG(arr);
            setLoad(1);
            // console.log(arr);
        })
    }, []);
    useEffect(() => {
        axios.post("http://localhost:3001/displayposts", {
            post: subGname
        }).then((res) => {
            const arr1 = res.data.subarray
            // setComment(arr1);
            setload1(1);
            setPost(arr1);
            // setLoad(1);
            console.log(res.data)
        })
    }, []);
    

    return (
        (load && load1) ? (
            <div>
                <Popup trigger={
                    <>
                        <Button onClick={() => { setflag(!flag) }}>
                            Create Post
                        </Button>
                        {(flag) ? (
                            <div className='form-popup'>
                                <FormPart subGname={subGname} />
                            </div>
                        ) : (<></>)}
                    </>}></Popup>
                <div>
                    {subG.map((e) => {
                        return (
                            <div class="widget-post" aria-labelledby="post-header-title">
                                <div class="widget-post__header">
                                    <h2 class="widget-post__title" id="post-header-title">
                                        <i class="fa fa-pencil" aria-hidden="true"><strong><u>Name:</u></strong><br></br>{e.Name}</i>
                                    </h2>
                                </div>
                                <form id="widget-form" class="widget-post__form" name="form" aria-label="post widget">
                                    <div class="widget-post__content">
                                        <label for="post-content" class="sr-only">yup</label>
                                    </div>
                                    <div>
                                        <h3 class="widget-post__title" id="post-header-title">
                                            <i class="fa fa-pencil" aria-hidden="true"><strong><u>Description:</u></strong><br></br>{e.Description}</i>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 class="widget-post__title" id="post-header-title">
                                            <i class="fa fa-pencil" aria-hidden="true"><strong><u>Tags:</u></strong><br></br>{e.Tags}</i>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 class="widget-post__title" id="post-header-title">
                                            <i class="fa fa-pencil" aria-hidden="true"><strong><u>Banned Keywords</u></strong><br></br>{e.bannedKeywords}</i>
                                        </h3>
                                    </div>
                                </form>
                            </div>
                        );
                    })}
                    {post.map((f) => {
                        return (
                            <div class="widget-post" aria-labelledby="post-header-title">
                                <form id="widget-form" class="widget-post__form" name="form" aria-label="post widget">
                                    <div class="widget-post__content">
                                        <label for="post-content" class="sr-only">yup</label>
                                    </div>
                                    <div>
                                        <h3 class="widget-post__title" id="post-header-title">
                                            <i class="fa fa-pencil" aria-hidden="true"><strong><u>Description:</u></strong><br></br>{f.Description}</i>
                                        </h3>
                                    </div>
                                    <div>
                                        <h3 class="widget-post__title" id="post-header-title">
                                            <i class="fa fa-pencil" aria-hidden="true"><strong><u>Posted By</u></strong><br></br>{f.Author}</i>
                                        </h3>
                                    </div>
                                    <button>Upvote</button>
                                    <button>Downvote</button>
                                    <button>Save Post</button>
                                    <Popup trigger={
                                        <>
                                            <Button onClick={() => { setflag1(!flag1) }}>
                                                Comment
                                            </Button>
                                            {(flag1) ? (
                                                <div className='form-popup'>
                                                    {/* <h2>fsgerwsr</h2> */}
                                                    {/* <h2>{post._id}</h2> */}
                                                    <CommentForm post={post[0]._id} />
                                                </div>
                                            ) : (<></>)}
                                        </>}></Popup>
                                {/* <br></br> */}
                            </form>
                            </div>
                );
                    })}
            </div>
            </div >) : (<p>Loading</p>)
        );

}
export default SubgredditPage;
