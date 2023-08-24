import classes from './CartItem.module.css';

const CartItem = (props) => {
  // const { title, quantity, price } = props.item;

  return (
    <li className={classes.item}>
      <header>
        <h3>{props.title}</h3>
        <div className={classes.price}>
          {/* ${total.toFixed(2)}{' '} */}
          <span className={classes.itemprice}>{props.price}</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
