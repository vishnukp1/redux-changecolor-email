import {configureStore} from "@reduxjs/toolkit"
import useReducer  from '../features/user';
import themeReducer from "../features/theme"
export const store= configureStore({
  reducer:{
    user : useReducer,
    theme : themeReducer,
  },
})