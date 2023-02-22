import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import LaunchIcon from '@mui/icons-material/Launch';
function SubgredditPage() {
    const { subGname } = useParams();
    const [subG, setsubG] = useState([]);
    useEffect(() => {
        axios.post("http://localhost:3001/displaysub", {
            subG: subGname
        }).then((res) => {
            const arr = res.data.subarray
            setsubG(arr);
            // console.log(arr);
        })
    }, []);

    return(
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
        )
    })}
    {/* <div>
        <button onClick={}>Create Post</button>
    </div> */}
    </div>
    )
}
export default SubgredditPage;
