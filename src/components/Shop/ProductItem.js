import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import {cartActions} from '../../store/cartSlice';

const ProductItem = (props) => {
  const dispatch= useDispatch();
  const { title, price, description } = props;

  const updatedPrice=+props.price

  const addItemsToCart=()=>{

    dispatch(cartActions.addtoCart({
      title,
      price,
      description,
      quantity:1
    }))

  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemsToCart}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
