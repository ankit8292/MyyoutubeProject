import { Link } from "react-router-dom";

const SearchVideoList = ({info})=>{
   
    const {snippet, statistics} =info;
    const {title,thumbnails, channelTitle, description} =snippet;
   // if(snippet===undefined) return
    return (
       <div className="grid grid-cols-12">
        <div className="p-2 m-2 col-span-6 h-96 shadow-lg">
        <Link key={info.id.videoId} to={"/watch?v=" + info.id.videoId}>
            <img className="w-full h-full rounded-lg" alt="thumbnail" src={thumbnails.medium.url}  /> 
        </Link>
             
        </div>
        <div className="col-span-6 m-5">
            <h1 className="font-bold">{title}</h1>
            <h3>{channelTitle}</h3>
            <h2 className="mt-4">{description}</h2>
        </div>
       </div>
    )
}

export default SearchVideoList;