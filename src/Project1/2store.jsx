import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './1slice.jsx'

const store = configureStore({
    reducer: {
        counter : counterSlice // counter name variable type useFul for useSelector
    }
})

store.actions = {
    increment : counterSlice.actions.increment;
    decrement : counterSlice.actions.decrement; 
}

export default store;