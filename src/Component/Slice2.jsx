import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProductDetails = createAsyncThunk(
    'cart/fetchProductDetails',
    async (productId, thunkAPI) => {
      const response = await fetch(`https://api.example.com/products/${productId}`);
      const data = await response.json();
      return data;
    }
  );


const complexSliceProduct = createSlice({
    name : 'cart',
    initialState : {
        items : [],
        totalQuantity : 0,
        totalPrice : 0,
        status : 'idle',
        error : false  
    },
    reducers : {
        addItem: (state, action) => {
            const newItem = action.payload; // passed data is here in here not like on off button increament decrement type 
            const existingItem = state.items.find((item) => item.id === newItem.id);
      
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.totalPrice += newItem.price;
            } else {
              state.items.push({
                ...newItem,
                quantity: 1,
                totalPrice: newItem.price,
              });
            }
      
            state.totalQuantity += 1;
            state.totalPrice += newItem.price;
          },
          removeItem : (state,action) => {
            const removeItem = action.payload;
            const removeItemArrayItem = state.items.find((item)=>item.id===removeItem.id);
            if(!removeItemArrayItem){
                throw new Error("throw error")
            }
            else{
               state.totalQuantity -= removeItemArrayItem.quantity;
               state.totalPrice -= removeItemArrayItem.price;
               state.filter((item)=>{
                return item != removeItemArrayItem
               })             

            }

            state.totalQuantity -=1
            state.totalPrice -= removeItem.price
          }
          ,
          increaseItemQuantity: (state, action) => {
            const itemId = action.payload;
            const existingItem = state.items.find((item) => item.id === itemId);
      
            if (existingItem) {
              existingItem.quantity += 1;
              existingItem.totalPrice += existingItem.price;
              state.totalQuantity += 1;
              state.totalPrice += existingItem.price/existingItem.quantity;
            }
          },
          decreaseItemQuantity : (state,action) => {
            const item = action.payload // which data jo select kiya gaya hai
            const existingItem = state.items.find((item)=>item.id ===  item.id);
            if(existingItem){
                existingItem.quantity -=1;
                existingItem.totalPrice -= item.price;
                state.totalPrice -= existingItem.price/existingItem.quantity;
                state.totalQuantity -= 1;
            }
          },

          // listen Event 
          extraReducer : (builder) => {
            builder
            .addCase(fetchProductDetails.pending, (state) => {
              state.status = 'loading'; // 1. When the request is pending
            })
            .addCase(fetchProductDetails.fulfilled , (state)=>{
             state.status = "fulfilled";
            })  
            .addCase(fetchProductDetails.rejected,(state)=>{
                state.status = "rejected",
                state.error = true
            })
          }
    }
      
})

export const  {addItem} = complexSliceProduct.actions;
export default complexSliceProduct.reducer;
