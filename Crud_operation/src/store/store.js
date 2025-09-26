
import UserReducer from '../redux/UserReducer'
import { configureStore } from '@reduxjs/toolkit';

const store =configureStore({
   reducer:{
    users: UserReducer
   }
})
export default store
