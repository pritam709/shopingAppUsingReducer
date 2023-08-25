import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./uiSlice";
const initialState = { items: [], showCart: false };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
        // state.totalQuantity = action.payload.totalQuantity;
        state.items = action.payload.items;
      },
    cartVisibilityHandler(state) {
      state.showCart = !state.showCart;
    },
    addtoCart(state, action) {
      const existingtem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingtem) {
        state.items.push({
          id: action.payload.id,
          price: action.payload.price,
          quantity: 1,
          totalPrice: action.payload.price,
          title: action.payload.title,
        });
      } else {
        existingtem.quantity = existingtem.quantity + 1;
        existingtem.totalPrice = existingtem.totalPrice + existingtem.price;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingtem = state.items.find((item) => item.id === id);
      if (existingtem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== existingtem.id);
      } else {
        existingtem.quantity--;
        existingtem.totalPrice = existingtem.totalPrice - existingtem.price;
      }
    },
  },
});


export const fetchCartData = () => {
    return async (dispatch) => {
      const fetchData = async () => {
        const response = await fetch(
            "https://cart-5f3a6-default-rtdb.firebaseio.com/cart.json",
            );
  
        if (!response.ok) {
          throw new Error('Could not fetch cart data!');
        }
  
        const data = await response.json();
  
        return data;
      };
  
      try {
        const cartData = await fetchData();
        dispatch(
          cartActions.replaceCart({
            items: cartData.items || [],
            totalQuantity: cartData.totalQuantity,
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Fetching cart data failed!',
          })
        );
      }
    };
  };

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        title: "sending...",
        message: "sending cart data",
        status: "pending...",
      })
    );
    const sendRequest = async () => {
      const response = await fetch(
        "https://cart-5f3a6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("smnthing went wrong");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          title: "sent.",
          message: "sent cart data successfully",
          status: "success",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: "error",
          message: "somthing went wrong",
          status: "error",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
