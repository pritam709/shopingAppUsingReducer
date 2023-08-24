import { useDispatch } from "react-redux";
import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cartSlice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, price ,id} = props;
  const addItemHandler=()=>{
    dispatch(cartActions.addtoCart({
      id,
      price,
      title
      

    }))
  }
  const itemRemoveHandler = () => {
    dispatch(cartActions.removeFromCart(props.id));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          ${props.total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${props.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemRemoveHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
