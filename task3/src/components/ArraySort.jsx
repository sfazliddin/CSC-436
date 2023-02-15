import React from "react";
import products from "../data/Products";


const ArraySort=()=>{

    const sortedProducts = products.sort((a, b) => {
        return a.price - b.price;
      });
    
      const productList = sortedProducts.map((product) => {
        return <li key={product.id}>{product.name} - ${product.price}</li>;
      });
    
      return (
        <ul>{productList}</ul>
      );

}

export default ArraySort;