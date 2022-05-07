import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";

const Filter = ({ value, onFilterChange }) => (
  <Form.Group className="mb-3" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
    <Form.Label htmlFor="filter">Find contacts by name</Form.Label>
    <Form.Control type="text" name="filter" value={value} onChange={onFilterChange} style={{maxWidth: 300}}  />
  </Form.Group>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
