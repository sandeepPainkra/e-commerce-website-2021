import React from "react";

const SingleProduct = (prod) => {
  console.log(prod);
  return <div>{prod.prod.name}</div>;
};

export default SingleProduct;
