import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/uiSlice";
let initial=true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const cart = useSelector((state) => state.cart);
  const notification= useSelector(state=>state.ui.notification)
  
  useEffect(() => {
   
    const sendCart = async () => {
      dispatch(
        uiActions.showNotification({
          title: "sending...",
          message: "sending cart data",
          status: "pending...",
        })
      );
      const response = await fetch(
        "https://cart-5f3a6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      //  const  responsedata= await response.json();

      if (!response.ok) {
       throw new Error("smnthing went wrong")
       
      }
      dispatch(
        uiActions.showNotification({
          title: "sent.",
          message: "sent cart data successfully",
          status: "success",
        }))
    };
    if(initial){
      initial=false;
      return;
    }
    sendCart().catch(err=>{
      dispatch(
        uiActions.showNotification({
          title: "error",
          message: "somthing went wrong",
          status: "error",
        }))

    })
  }, [cart,dispatch]);
  return (
    <>
      { notification && 
        <Notification  status={notification.status} 
          title={notification.title}
          message={notification.message}
        />
      }
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
