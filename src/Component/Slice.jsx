import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name : 'counter',
//   initial_value : 0,
  initails_value : {count:0},
  reducers : {
    increment : (state) => {
        // return state +=1 
        return {...state,count:state.count+1}
    },
     decrement : (state) => {
        // return state -=1;
        return {...state,count : state.count -1}
     }
  }
})

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer

