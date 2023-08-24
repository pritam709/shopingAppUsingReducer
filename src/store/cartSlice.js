import { createSlice } from "@reduxjs/toolkit";
const initialState={items:[],showCart:false}
const cartSlice= createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        cartVisibilityHandler(state){
            state.showCart=!state.showCart;
        },
        addtoCart(state,action){
            state.items.push(action.payload);
        },
        removeFromCart(){},
    }
})

export const cartActions= cartSlice.actions;
export default cartSlice.reducer;