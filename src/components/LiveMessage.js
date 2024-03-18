import React from "react";


const LiveMessage=({name, message})=>{
    return(
        <div className="flex items-center shadow-sm p-2">
             <img 
                className="h-8"
                alt="user-icon"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default LiveMessage;