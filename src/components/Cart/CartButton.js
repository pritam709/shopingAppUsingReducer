import { useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { cartActions } from '../../store/cartSlice';
const CartButton = (props) => {
  const dispatch =useDispatch();
 const items= useSelector(state=>state.items);
 const totalItems= items.reduce((curr,item)=>{
  return curr+item.quantity;
 },0)
 const cartToggleHandler=()=>{
  dispatch(cartActions.cartVisibilityHandler());
 }
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
