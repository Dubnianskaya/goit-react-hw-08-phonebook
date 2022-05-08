import { memo, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FormInput from "./FormInputs";

function NumberForm({ onSubmit, adding }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;

      case "number":
        setNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handleSubmit} style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
      <FormInput name={name} number={number} inputChange={handleInputChange}/>
  <Button type="submit" variant="outline-info">{adding ? "Adding..." : "Add contact"}</Button>
</Form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(NumberForm);
