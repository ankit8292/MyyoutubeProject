import React, { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import {cacheResults} from "../utils/searchSlice";
import { YOUTUBE_SEARCH_SUGGESTION,API_Key } from "../utils/constant";

const Head =()=>{
    const dispatch =useDispatch();
    const cacheSearch=useSelector((store)=>store.search)
    const [searchText, setSearchText]=useState("");
    const [suggestionsData, setSuggestionsData]= useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false)
    
    useEffect(()=>{
      const timer=setTimeout(()=>{
      if(cacheSearch[searchText]){
        setSuggestionsData(cacheSearch[searchText]);
      }
      else{
        getSuggestionAPIData()
      }
    },200) ;

      return ()=>{
        clearTimeout(timer);
      }
    },[searchText]);

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    const getSuggestionAPIData= async()=>{
        if(searchText!=""){
            const data= await fetch(YOUTUBE_SEARCH_SUGGESTION + searchText);
            console.log(data);
            const json= await data.json();
            console.log(json);
            setSuggestionsData(json);
            dispatch(cacheResults({
                [searchText]:json
            }));
        }
     
    }
    return(
        <div className="grid grid-flow-col p-2 m-2 shadow-lg"> 
            <div className="flex col-span-1">
                <img
                    className="h-9 cursor-pointer"
                    alt="menu"
                    src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
                    onClick={()=>toggleMenuHandler()}
                />
                <img
                    className="h-9 mx-2"
                    alt="youtube"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
                />
            </div>
            <div className="col-span-10 px-10">
                <div>
                <input 
                    className="px-5 w-1/2 border border-grey-400 p-2 rounded-l-full"  
                    type="text" 
                    value={searchText}
                    onChange={(e)=>setSearchText(e.target.value)}
                    onFocus={()=>setShowSuggestions(true)}
                    onBlur={()=>setShowSuggestions(false)}
                    
                />
                <button className="border border-grey-400 px-5 py-2 bg-gray-100 rounded-r-full">🔍</button>
            </div>
            {showSuggestions && (
            <div className="fixed bg-white py-2 px-2 w-[34rem] shadow-lg rounded-lg border border-gray-100">
                <ul>
                 {suggestionsData.map((suggestion)=><li key={suggestion.show.id} className="px-3 py-2 shadow-sm hover:bg-gray-400">🔍{suggestion.show.name}</li>)}
                </ul>
            </div>)}
            </div>
            <div className="col-span-1">
                <img 
                    className="h-9"
                    alt="user-icon"
                    src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
                />
            </div>
                
         
        </div>
    )
}

export default Head;