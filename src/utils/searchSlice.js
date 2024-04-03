import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{
        searchQuery:{},
        searchList:{}
    },
    reducers:{
        cacheResults:(state, action)=>{
            state={...action.payload, ...state}
        },
        addSearchQuery:(state, action)=>{
            state.searchQuery=action.payload;
        },
        addSearchList:(state, action)=>{
            state.searchList=action.payload;
        }
    }
});

export const {cacheResults,addSearchQuery, addSearchList}=searchSlice.actions;
export default searchSlice.reducer;