import React, { useEffect, useState } from "react";
import Product from "./Product";
import { initialProducts } from "../constants";

const Checkout = () => {
  const [products, setProducts] = useState(initialProducts);
  const [totalPrices, setTotalPrices] = useState(0);

  useEffect(() => {
    const totalPrices = products.reduce((prev, cur) => prev + cur.total, 0);
    setTotalPrices(totalPrices);
  }, [products]);

  function isPlus(id) {
    let copyProducts = [...products];
    const selectedProduct = copyProducts.filter((p) => p.id === id)[0];
    const selectedItemIndex = copyProducts.findIndex((p) => p.id === id);

    const updatedProduct = {
      ...selectedProduct,
      orderedQuantity: selectedProduct.orderedQuantity + 1,
      total:
        parseInt(
          "" + Math.round((selectedProduct.total + selectedProduct.price) * 100)
        ) / 100
    };
    copyProducts[selectedItemIndex] = updatedProduct;

    setProducts(copyProducts);
  }

  function isMinus(id) {
    let copyProducts = [...products];
    const selectedProduct = copyProducts.filter((p) => p.id === id)[0];
    const selectedItemIndex = copyProducts.findIndex((p) => p.id === id);

    const updatedProduct = {
      ...selectedProduct,
      orderedQuantity: selectedProduct.orderedQuantity - 1,
      total:
        parseInt(
          "" + Math.round((selectedProduct.total - selectedProduct.price) * 100)
        ) / 100
    };
    copyProducts[selectedItemIndex] = updatedProduct;

    setProducts(copyProducts);
  }

  // type here
  return (
    <div>
      <div style={{ maxWidth: "80%", margin: "auto" }}>
        <h2 style={{ textAlign: "left" }}>Checkout page</h2>
        <table style={{ margin: "auto", width: "100%" }}>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th># Available</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <Product
                key={index}
                id={item.id}
                name={item.name}
                availableAmount={item.availableAmount}
                price={item.price}
                orderedQuantity={item.orderedQuantity}
                total={item.total}
                isPlus={isPlus}
                isMinus={isMinus}
              />
            ))}
          </tbody>
        </table>

        <h2>Order summary</h2>
        <p>Discount: $</p>
        <p>Total: ${totalPrices}</p>
      </div>
    </div>
  );
};
export default Checkout;
