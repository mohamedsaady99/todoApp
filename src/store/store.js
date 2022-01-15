import { configureStore } from "@reduxjs/toolkit";
import todosReducer from '../components/todo/todosSlice'

const store = configureStore({
  reducer:{
    todos:todosReducer
  }
})
export default store