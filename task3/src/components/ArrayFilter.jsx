import React from "react";
import products from "../data/Products";

const ArrayFilter=()=>{

    const saleProducts = products.filter((product) => {
        return product.onSale;
      });
    
      const productList = saleProducts.map((product) => {
        return <li key={product.id}>{product.name} - ${product.price}</li>;
      });
    
      return (
        <ul>{productList}</ul>
      );


}

export default ArrayFilter;