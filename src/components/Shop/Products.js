import ProductItem from './ProductItem';
import classes from './Products.module.css';
const dummyArray=[
  {
    id:"p1",
    title:'Test1',
    price:6,
    description:'This is a first product - amazing!'
  },
  {
    id:"p2",
    title:'Test2',
    price:10,
    description:'This is a second product - amazing!'
  }

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummyArray.map(item=>{
        return  <ProductItem
        key={item.id}
           id={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
        })}
      </ul>
    </section>
  );
};

export default Products;
