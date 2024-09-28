import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name  : 'onOffButtonSlice',
    initialState : {isOn : false},
    reducers : {
        on : (state) => {
            state.isOn = true;
        },
        off : (state) => {
            state.isOn = false
        }
    }
})

export const {on,off} = buttonSlice.actions
export default buttonSlice.reducer