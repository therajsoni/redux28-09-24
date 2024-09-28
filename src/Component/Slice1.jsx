import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name : 'theme',
    initialState : {isOn:false},
    reducers : {
    on : (state) => {
        return {...state,isOn:false}
    }
    ,
    off : (state) => {
        return {...state,isOn : true}
    }
    ,
    default : (state) => {
        return {...state}
    }    
    }
})

export const {on,off} = themeSlice.actions;
export default themeSlice.reducer;