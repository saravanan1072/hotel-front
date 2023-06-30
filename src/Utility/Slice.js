import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"saravanan",
    initialState:[],
    reducers:{
        update:(state,action)=>{
           console.log(action.payload);
           state=action.payload
           return state
        },
        clear:(state,action)=>{
            state=""
            return state
         },
    }
});

export const {update,clear}=Slice.actions;
export default  Slice.reducer;