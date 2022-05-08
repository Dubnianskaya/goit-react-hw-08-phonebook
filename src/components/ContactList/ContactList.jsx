import React from "react";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row'
import { ContactListItem } from "./ContactListItem";

const ContactList = ({ contactsItems, openModal }) => (
  <Row xxl={"auto"}>
    {contactsItems.map((contact) => (
      <ContactListItem key={contact.id} {...contact} openModal={openModal}/>
    ))}
  </Row>
);

ContactList.propTypes = {
  contactsItems: PropTypes.array.isRequired,
};

export default ContactList;
