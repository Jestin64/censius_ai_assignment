import React from "react";

interface ProductsComponentProps {}

const ProductsComponent = ({}: ProductsComponentProps) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: "50px",
      }}
    >
      products page
    </div>
  );
};

export default ProductsComponent;
