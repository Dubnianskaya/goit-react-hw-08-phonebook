import { memo, useState } from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

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
  <Form.Group className="mb-3">
    <Form.Label htmlFor="name">Name</Form.Label>
    <Form.Control type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label htmlFor="number">Number</Form.Label>
    <Form.Control type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required />
  </Form.Group>
  <Button type="submit" variant="outline-info">{adding ? "Adding..." : "Add contact"}</Button>
</Form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(NumberForm);
