import React, { Fragment } from "react";
import classes from "../../assets/css/ProductionDash/Production.module.css";
import Content from "./Content";
import Wrapper from "./Wrapper";

const ProductionDash = () => {
  return (
    <Fragment>
      <div className={classes.header}>Production Dashboard</div>
      <Content />
    </Fragment>
  );
};

export default ProductionDash;
