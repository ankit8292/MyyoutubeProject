import { createSlice } from "@reduxjs/toolkit";


const chatSlice=createSlice({
    name: "chat",
    initialState: {
        messages:[],
    },
    reducers:{
        addChatMessage:(state,action)=>{
            state.messages.splice(10,1);
            state.messages.push(action.payload);
        },
    },
});


export const {addChatMessage}=chatSlice.actions;
export default chatSlice.reducer;
