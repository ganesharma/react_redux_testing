import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../types/login";

let loginIntialVal : IUser = {
    username : '',
    name : ''
};


const loginSlice = createSlice({
    name : 'cart',
    initialState : loginIntialVal,
    reducers : {
        setUser : (state, action) => {
            const userData : IUser = action.payload.user;
            state.username = userData.username;
            state.name = userData.name;
        },
        deleteUser : (state, action) => {
          
            const username : string = action.payload.username;
           return {
            username : '',
            name : ''
           }
           
        },
        getUser : () => {
            return loginIntialVal
         },


    }
});


export const { setUser, deleteUser, getUser} = loginSlice.actions;

export default loginSlice.reducer;