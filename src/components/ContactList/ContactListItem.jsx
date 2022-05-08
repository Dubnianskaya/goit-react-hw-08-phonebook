import PropTypes from "prop-types";
import { useDeleteContactMutation } from "../../redux/contactsSlice";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';


export const ContactListItem = ({ id, name, number, openModal }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Col xxl={"auto"}>
    <Card style={{ height: '8rem', marginTop: 15 }}>
  <Card.Body>
    <Card.Title style={{color: "#000"}}>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{number}</Card.Subtitle>
    <Button variant="outline-dark" size="sm" type="button" style={{marginRight: 10}} onClick={() => deleteContact(id)}>{isDeleting ? "Deleting" : "Delete"}</Button>
    <Button variant="outline-primary" size="sm" type="button" onClick={() => openModal(id)}>
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
