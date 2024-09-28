import {ConfigureStore} from "@reduxjs/toolkit react-redux"
import { counterSlice } from "../Slice/Slice"
export const store = ConfigureStore({
    reducer : {
        counter : counterSlice
    }
})

