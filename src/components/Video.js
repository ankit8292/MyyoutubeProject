import React from "react";

const Video=({info})=>{
    //console.log(info);
    const {snippet, statistics} =info;
    const {channelTitle, title ,thumbnails} =snippet;
    return(
        <div className="p-2 m-2 w-72 shadow-lg">
            <img alt="thumbnail" src={thumbnails.medium.url}  />
            <ul> 
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>
        </div>
    )
}

export const HighOrderComponent=({info})=>{
    return(
        <div className="border  border-green-400">
            <Video info={info} />
        </div>
    )
}

export default Video;