import React,{useEffect} from "react"
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import LiveChat from "./LiveChat";

const WatchPage=()=>{
const [searchparams]=useSearchParams();
const ID= searchparams.get("v");
const dispatch =useDispatch();
useEffect(()=>{
    dispatch(closeMenu());
},[])
    return(
        <div className="px-5 m-5 flex w-full">
            <div className="my-2">
            <iframe 
                width="1000" 
                height="600"
                src={"https://www.youtube.com/embed/" + ID}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
             </iframe>
             </div>
             <div className="w-full">
                <LiveChat />
             </div>
        </div>
    )
}

export default WatchPage;