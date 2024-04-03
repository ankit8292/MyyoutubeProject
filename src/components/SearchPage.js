import { useDispatch, useSelector } from "react-redux";
import SearchVideoList from "./SearchVideoList";
import { YOUTUBE_SEARCH_SUGGESTION_LIST } from "../utils/constant";
import { addSearchList } from "../utils/searchSlice";
import { useEffect, useRef, useState } from "react";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";


const SearchPage = ()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [searchVideos, setSearchVideos]=useState([]);
    const [queryChange, setQueryChange]=useState("");
    const [isLoading, setIsLoading]=useState(false);
    
    const query=useSelector(store=>store.search?.searchQuery);
    const prevQuery = useRef(queryChange);

    //console.log(prevQuery);

    
    
    const getSearchVideoList=async()=>{
        try{
            const data= await fetch(YOUTUBE_SEARCH_SUGGESTION_LIST + query);
            const json =await data.json();
            //dispatch(addSearchList(json.items));
            if(prevQuery.current!==query){
                setSearchVideos(json.items);
            }
            else{
                setSearchVideos((videos)=>[...videos, ...json.items]);
            } 
        }
        catch(err){
            navigate("/");
            <ErrorMessage />
        }
        setIsLoading(false);
         
    }

 

    useEffect(()=>{
        //setQueryChange(query);
        prevQuery.current=queryChange;
        getSearchVideoList(); //checking Error handling
        // window.addEventListener(("scroll"), scrollHandle);
        // return ()=>window.removeEventListener("scroll", scrollHandle);
        // //window.addEventListener(("scroll"), throttleFunc(scrollHandle,5000));
        // return ()=>window.removeEventListener("scroll", throttleFunc(scrollHandle));
       
    },[query]);

    const scrollHandle=()=>{
            if((window.scrollY + window.innerHeight)>= document.body.scrollHeight){
                setIsLoading(true);
                getSearchVideoList();
            }
                
        }

    if((Object.keys(searchVideos)).length===0) return;


    return (
        <div className="flex flex-wrap">
        {searchVideos && searchVideos.map((video)=>(<SearchVideoList info={video}/>))} 
        {isLoading && <Loading />}
        </div>
    )
}

export default SearchPage;