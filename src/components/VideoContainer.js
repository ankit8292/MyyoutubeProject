import React, { useEffect,useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constant";
import {Link} from "react-router-dom";
import Video, { HighOrderComponent } from './Video';
const VideoContainer=()=>{

    const [videos, setVideos]=useState([]);

    useEffect(()=>{
        getVideoes();
    },[]);

    const getVideoes= async ()=>{
        const data= await fetch(YOUTUBE_VIDEO_URL);
        const res=await data.json();
        setVideos(res.items);
        // console.log(res.items);
        // console.log(videos[0])
    }

    return(
        <div className="flex flex-wrap">
           {videos[1] && <HighOrderComponent info={videos[1]} />} 
           {videos.map((video)=>(
            <Link key={video.id} to={"/watch?v=" + video.id}>
                <Video  info ={video} />
           </Link>
           ))} 
        </div>
    )
}

export default VideoContainer;