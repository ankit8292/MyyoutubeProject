import React from "react";
import Button from "./Button";

const ButtonList=()=>{
    return(
        <div className="flex">
            <Button name="All" />
            <Button name="Songs" />
            <Button name="Gaming" />
            <Button name="Movies" />
            <Button name="Video" />
            <Button name="Cricket" />
            <Button name="Football" />
            <Button name="News" />
        </div>
    )
}

export default ButtonList;