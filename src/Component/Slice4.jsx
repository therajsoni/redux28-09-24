import { createSlice  , asyncThunkCreator } from "@reduxjs/toolkit";
const {api1,api2,api3,api4,api5} from './Api.jsx';

const api1 = asyncThunkCreator(
    api1,
    async(IdleDeadline,data) => {
        const fetch = 
    }
)

export const productSlice = createSlice({
    name : 'cart',
    initialState : {
        cartPrice : 0,
        totalQuantity : 0,
    },
    reducers : {
        add : (state,action) => {
            const data  = action.payload;
            state.cartPrice += data.price;
            state.totalQuantity += data.quantity;
        },
        remove : (state,action) => {
            const data = action.payload;
            state.cartPrice -= data.price;
            state.totalQuantity = -data.quantity;
        }
    }    
})
