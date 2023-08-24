import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cart = (props) => {
  const items = useSelector((state) => state.cat.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => {
          return (
            <CartItem
            key={item.id}
             id={item.id}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              total={item.totalPrice}
            />
          );
        })}
      </ul>
    </Card>
  );
};

export default Cart;
