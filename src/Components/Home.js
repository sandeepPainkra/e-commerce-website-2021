import React from "react";
import "./style.css";
import { CartState } from "./context/Context";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <div className="home">
      {/* <Filters/> */}
      <div className="product_container">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
