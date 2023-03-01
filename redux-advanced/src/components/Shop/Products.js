import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      title: "The first book",
      description: "The first book I have written.",
      price: 6,
    },
    {
      id: "p2",
      title: "The second book",
      description: "The second book I have written.",
      price: 5,
    },
  ];

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
