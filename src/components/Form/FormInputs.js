import { Form } from "react-bootstrap";

function FormInput({ name, number, inputChange }) {
return (
    <>
<Form.Group className="mb-3">
    <Form.Label htmlFor="name">Name</Form.Label>
    <Form.Control type="text"
          name="name"
          value={name}
          onChange={inputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required />
  </Form.Group>
  <Form.Group className="mb-3">
    <Form.Label htmlFor="number">Phone</Form.Label>
    <Form.Control type="tel"
          name="number"
          value={number}
          onChange={inputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required />
  </Form.Group>
  </>
  )}

  export default FormInput;