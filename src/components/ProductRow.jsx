import React from "react";

function ProductRow(props) {
  const { product } = props;

  const textColorClass = product.inStock ? "" : "out-of-stock";

  return (
    <tr>
      <td className={textColorClass}>{product.name}</td>
      <td className={textColorClass}>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
