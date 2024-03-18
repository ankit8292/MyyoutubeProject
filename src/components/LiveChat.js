import React, {useEffect, useState} from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage } from "../utils/chatSlice";
import { generateRandomName,makeRandomMessage } from "../utils/helper";

 const  LiveChat=()=>{

    const dispatch=useDispatch();
    const chatMessage=useSelector((store)=>store.chat.messages);

    const [liveMessage, setLiveMessage]=useState("");
    useEffect(()=>{
        const data= setInterval(()=>{
            dispatch(addChatMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20) + " 🚀",
            }))
        },2000);

        return ()=> clearInterval(data);
    },[]);
    return(
        <>
        <div className="w-full h-[600px] m-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
        {chatMessage.map((c,i)=><LiveMessage key={i} name={c.name} message={c.message} />)
        }
        </div>
        </div>
        <div className="w-full p-2 ml-2 border border-gray-400">
            <form 
                onSubmit={(e)=>{
                    e.preventDefault();
                    dispatch(addChatMessage({
                        name:"Ankit Aditi",
                        message:liveMessage
                    }));
                    setLiveMessage("");
                }
                }

            >
            <input 
            className="px-2 w-94"
            type="text" 
            value={liveMessage}
            onChange={(e)=>{setLiveMessage(e.target.value)} }       
             />
            <button className="px-2 mx-2 bg-green-100" >Send</button>
            </form>
        </div>
        </>
    )
}

export default LiveChat;