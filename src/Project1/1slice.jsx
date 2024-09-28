import { createSlice } from "@reduxjs/toolkit";

const couterSlice = createSlice({
    name : " counter ", //identify
    initialState : {count : 0},
    reducers : {
        increment : (state) => {
            state.count += 1
        }
        ,
        decrement : (state) => {
            state.count -= 1
        }
    }
})

export const {increment,decrement} = couterSlice.actions;

export default couterSlice.reducer;



// slice always return initial values