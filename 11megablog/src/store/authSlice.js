import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status: false,
    userdata:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userdata=action.payload.userdata;
        },
        //we have access of payload but no need here in logout
        logout:(state)=>{
            state.status=false
            state.userdata=null
        }
    }
})

//actions here means the ob in the reducers
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;