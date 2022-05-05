import PropTypes from "prop-types";
import { useDeleteContactMutation } from "../../redux/contactsSlice";
import {
  ContactListItemStyled,
  ContactName,
  ContactNumber,
  DeleteBtn,
} from "./ContactList.styled";

export const ContactListItem = ({ id, name, phone }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ContactListItemStyled>
      <p>
        <ContactName>{name}:</ContactName>
        <ContactNumber>{phone}</ContactNumber>
      </p>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        {isDeleting ? "Deleting" : "Delete"}
      </DeleteBtn>
    </ContactListItemStyled>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
