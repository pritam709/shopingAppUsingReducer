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
           
            const existingtem= state.items.find(item=>item.id===action.payload.id);
            if(!existingtem){
                state.items.push({
                    id:action.payload.id,
                    price:action.payload.price,
                    quantity:1,
                    totalPrice:action.payload.price,
                    title:action.payload.title,
                });
            }
            else{
                existingtem.quantity=existingtem.quantity+1;
                existingtem.totalPrice=existingtem.totalPrice+existingtem.price;
            }
        },
        removeFromCart(state,action){
            const id=action.payload;
            const existingtem= state.items.find(item=>item.id===id);
            if(existingtem.quantity===1){
                state.items= state.items.filter(item=>item.id!==existingtem.id)
            }

            else{
                existingtem.quantity--;
                existingtem.totalPrice=existingtem.totalPrice-existingtem.price;
            }

        },
    }
})

export const cartActions= cartSlice.actions;
export default cartSlice.reducer;