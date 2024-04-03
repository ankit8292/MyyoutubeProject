import React, { useEffect,useState } from "react";
import { YOUTUBE_VIDEO_URL } from "../utils/constant";
import {Link} from "react-router-dom";
import Video, { HighOrderComponent } from './Video';
import Shimmer from "./Shimmer";
const VideoContainer=()=>{

    const [videos, setVideos]=useState([]);
    const [isLoading, setIsLoading]=useState(false);
    useEffect(()=>{
        getVideoes();

        window.addEventListener("scroll", handleScroll);

        return ()=>window.removeEventListener("scroll", handleScroll);
    },[]);

    const handleScroll =()=>{
        if((window.scrollY + window.innerHeight)>= document.body.scrollHeight){
            getVideoes();
        }
    }

    const getVideoes= async ()=>{
        setIsLoading(true);
        try{
            const data= await fetch(YOUTUBE_VIDEO_URL);
            const res=await data.json();
            setVideos((prev)=>[...prev, ...res.items]); 
           
        }
        catch{
            
        }
        setIsLoading(false);
        // console.log(videos[0])
    }

    return(
        <div className="flex flex-col md:flex md:flex-row flex-wrap">
           {videos[1] && <HighOrderComponent info={videos[1]} />} 
           {videos.map((video)=>(
            <Link key={video.id} to={"/watch?v=" + video.id}>
                <Video  info ={video} />
           </Link>
           ))} 
           {isLoading && <Shimmer />}
        </div>
    )
}

export default VideoContainer;