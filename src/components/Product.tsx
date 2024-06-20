import React from "react";

const Product = ({
  id,
  name,
  availableAmount,
  price,
  orderedQuantity,
  total,
  isPlus,
  isMinus
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{availableAmount}</td>
      <td>${price}</td>
      <td>{orderedQuantity}</td>
      <td>${total}</td>
      <td>
        <button
          onClick={() => isPlus(id)}
          disabled={orderedQuantity >= availableAmount}
        >
          +
        </button>
        <button onClick={() => isMinus(id)} disabled={orderedQuantity === 0}>
          -
        </button>
      </td>
    </tr>
  );
};

export default Product;
