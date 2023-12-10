import { configureStore } from "@reduxjs/toolkit";
import Employe_Slice from "./slices/Employe_Slice";


export const store = configureStore({
   reducer:{
      Employe_Slice: Employe_Slice,
   }
})