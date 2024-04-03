import React from "react";

const Shimmer=({info})=>{
    return Array(25).fill(0).map((n,i)=>(
        <div className="p-2 m-2 w-65 border border-black shadow-lg">
            {/* <div className="w-64 h-64 bg-gray-200 duration-2 animate-pulse"></div> */}
            <div class="animate-pulse w-60 h-60 flex space-x-4">
            
                <div class="flex-1 space-y-6">
                <div class="h-2 bg-gray-200 mt-10 rounded"></div>
                <div class="h-2 bg-gray-200 mt-10 rounded"></div>
                <div class="h-2 bg-gray-200 mt-10 rounded"></div>
                <div class="h-2 bg-gray-200 mt-10 rounded"></div>
                </div>
            </div>
        </div>
    ))
}

export default Shimmer;