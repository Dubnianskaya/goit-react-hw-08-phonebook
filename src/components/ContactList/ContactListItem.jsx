import PropTypes from "prop-types";
import { useDeleteContactMutation } from "../../redux/contactsSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


export const ContactListItem = ({ id, name, number, openModal, setNumberChanges, setNameChanges }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const setModalData = (contactId, contactName, contactNumber) => {
    openModal(contactId);
    setNumberChanges(contactNumber);
    setNameChanges(contactName);
  }

  return (
    <Col>
    <Card style={{ marginTop: 15 }} bg={'dark'} border="primary">
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{number}</Card.Subtitle>
    <Button variant="light" size="sm" type="button" style={{marginRight: 10}} onClick={() => deleteContact(id)}>{isDeleting ? "Deleting" : "Delete"}</Button>
    <Button variant="primary" size="sm" type="button" onClick={() => setModalData(id,name,number)}>
    Update contact
        </Button>
  </Card.Body>
</Card>
</Col>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
