import { configureStore } from "@reduxjs/toolkit"

import counterReducer from "../component/counter/counterSlice"

export const counterStore =  configureStore({
  reducer: counterReducer
})