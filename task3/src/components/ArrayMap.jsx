import React from "react";
import products from "../data/Products";

const ArrayMap=()=>{

    const productList = products.map((product) => {
        return <li key={product.id}>{product.name}</li>;
      });
    
      return (
        <ul>{productList}</ul>
      );

}

export default ArrayMap;