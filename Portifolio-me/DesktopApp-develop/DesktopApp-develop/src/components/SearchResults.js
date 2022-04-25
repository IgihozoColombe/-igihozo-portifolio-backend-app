import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export default function SearchResult({ name, linkPath }) {
  return (
    <a style={{ background: "white", paddingRight:'20px'  }}>
      <Link to={linkPath}>{name}</Link>
    </a>
  );
}

SearchResult.PropTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};
