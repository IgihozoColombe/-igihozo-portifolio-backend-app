import React, { useState } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

// components
import Wrapper from "./Wrapper";
import ProductsDetails from "./ProductsDetails";

export default function Products(props) {
  let history = useHistory();
  let { path } = useRouteMatch();

  const [products, setProducts] = useState({
    productName: "",
    productCode: "",
    qty: "",
    price: "",
    unit: "",
  });

  const tableModel = {
    th: [
      "productName",
      "Product Code",
      "Qty",
      "Price",
      "Unit",
      "Image",
      "actions",
    ],
    indexes: ["productName", "productCode", "qty", "price", "unit", "image"],
  };

  const headerModel = [
    {
      name: "Add New",
      evt: () => addGroup(),
    },
  ];

  const heading = "Products";

  const addGroup = () => {
    history.push(`${path}/create`);
  };

  const handleInputChange = (event) => {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    setProducts({
      ...products,
      [name]: value,
    });
  };

  return (
    <Wrapper
      path={"/purchase-return"}
      model={products}
      tableModel={tableModel}
      headerModel={headerModel}
      heading={heading}
      smsBtn={false}
      formTitle={"Credit Account"}
      create={() => (
        <ProductsDetails
          details={products}
          onChange={(e) => handleInputChange(e)}
        />
      )}
      history={history}
    />
  );
}
