import { createSlice } from "@reduxjs/toolkit";
import userlist from "./userlist.json";
const initialState = JSON.parse(localStorage.getItem("users")) ||userlist;
const userslice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('users',JSON.stringify(state))
    },
    updateUser:(state,action)=>{
        const{id,name,email}=action.payload;
        const updatinguser = state.find(user=>user.id==id);
        if(updatinguser)
        {
          // console.log(name)
          updatinguser.name=name;
          updatinguser.email=email;
          localStorage.setItem('users',JSON.stringify(state))
        }
    },
    deleteUser:(state,action)=>{
      const {id}= action.payload;
      const du = state.find(user=>user.id==id);
      if(du){
        const filterresult = state.filter(f=>f.id!=id)
        localStorage.setItem('users',JSON.stringify(filterresult))
        return filterresult;
      }
    },
    
  },
});
export const { addUser,updateUser,deleteUser } = userslice.actions;
export default userslice.reducer; //exportin only reducers from userslice
