import React from "react";
import products from "../data/Products";

const ArrayReduce=()=>{

    const totalCost = products.reduce((acc, product) => {
        return acc + product.price;
      }, 0);
    
      return (
        <p>Total cost: ${totalCost}</p>
      );

}

export default ArrayReduce;