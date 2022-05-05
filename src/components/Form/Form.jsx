import { memo, useState } from "react";
import PropTypes from "prop-types";
import { FormStyled, Label, Input, AddContactBtn } from "./Form.styled";

function Form({ onSubmit, adding }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;

      case "phone":
        setPhone(event.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setPhone("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ name, phone });
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="number">
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddContactBtn type="submit">
        {adding ? "Adding..." : "Add contact"}
      </AddContactBtn>
    </FormStyled>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default memo(Form);
