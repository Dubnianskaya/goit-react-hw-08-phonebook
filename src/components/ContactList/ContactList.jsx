import React from "react";
import PropTypes from "prop-types";
import Row from 'react-bootstrap/Row'
import { ContactListItem } from "./ContactListItem";

const ContactList = ({ contactsItems, openModal, changeName, changeNumber }) => (
  <Row xxl={"auto"} style={{ justifyContent: "space-evenly" }}>
    {contactsItems.map((contact) => (
      <ContactListItem key={contact.id} {...contact} openModal={openModal} setNameChanges={changeName} setNumberChanges={changeNumber}/>
    ))}
  </Row>
);

ContactList.propTypes = {
  contactsItems: PropTypes.array.isRequired,
};

export default ContactList;
