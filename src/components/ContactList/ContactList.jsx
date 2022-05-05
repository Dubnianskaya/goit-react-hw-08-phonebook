import React from "react";
import PropTypes from "prop-types";
import { ContactsList } from "./ContactList.styled";
import { ContactListItem } from "./ContactListItem";

const ContactList = ({ contactsItems }) => (
  <ContactsList>
    {contactsItems.map((contact) => (
      <ContactListItem key={contact.id} {...contact} />
    ))}
  </ContactsList>
);

ContactList.propTypes = {
  contactsItems: PropTypes.array.isRequired,
};

export default ContactList;
