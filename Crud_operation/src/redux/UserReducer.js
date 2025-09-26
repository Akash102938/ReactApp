import {createSlice} from '@reduxjs/toolkit'
import {userList} from "../Data"

const userSlice = createSlice({
    name: 'users',
    initialState:userList,
    reducers: {
        
        //add
        addUser:(state,action)=>{
          state.push(action.payload)
          console.log(action.payload);
          
        },
        //update
        updateUser: ((state,action)=>{
          const {id,name,email} = action.payload
          const uu = state.find(user => user.id == id);
          if(uu){
            uu.name = name;
            uu.email = email
          }
        }),

        //delete
        deleteUser: (state, action) => {
         return state.filter(user => user.id !== action.payload)
       }
    }

})
export const {deleteUser,updateUser}=userSlice.actions
export const {addUser}= userSlice.actions
export default userSlice.reducer