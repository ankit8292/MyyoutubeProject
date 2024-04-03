import React from "react";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Head from "./Head";


const Body = ()=>{
    return(
        <>
        <div><Head/></div>
        <div className="flex">
            <SideBar />
            <Outlet />
        </div>
        </>
    )
}

export default Body;