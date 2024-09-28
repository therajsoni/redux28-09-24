import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items : [],
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        addItem : (state,action) => {
            const currentItem = action.payload;
            const existingItem = state.items.find(item => item.id === currentItem.id);
            if(existingItem){
                existingItem.quantity += 1;
            }
            else{
                state.items.push({
                    ...action.payload,
                    quantity : 1,
                })
            }
        },
        removeItem : (state,action) => {
            const currentItem = action.payload;
            state.items = state.items.filter(item => item.id !== currentItem.id)
        }
    }
})

export const {addItem,removeItem} = cartSlice.actions;

export default cartSlice.reducer;