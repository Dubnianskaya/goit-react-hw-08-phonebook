import { createPortal } from "react-dom";
import toast from "react-hot-toast";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { useChangeContactMutation } from "../../redux/contactsSlice";
import FormInput from "../Form/FormInputs";

const modalRoot = document.querySelector("#modal-root");

function ModalForm({show, closeModal, id, changeName, changeNumber, name, number}) {
  const [changeContact, { isLoading: isRefreshing, isSuccess, isError }] = useChangeContactMutation();

  const handleInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        changeName(event.target.value);
        break;

      case "number":
        changeNumber(event.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    changeContact({contactId: id, changes: { name, number }})
    closeModal();
    isSuccess && toast.success('Contact successfully changed');
    isError && toast.error('Something went wrong');
  };

    return createPortal(
    <Modal show={show} onHide={closeModal} aria-labelledby="contained-modal-title-vcenter" centered style={{color: "#000"}}>
      <Modal.Header closeButton>
        <Modal.Title as="h2" style={{textAlign:"center"}}>Enter your changes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
        <FormInput name={name} number={number} inputChange={handleInputChange}/>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
        <Button variant="secondary" onClick={closeModal} style={{marginRight: 10}}>Close</Button>
        <Button type="submit" variant="info">{isRefreshing ? "Saving..." : "Save Changes"}</Button>
        </div>
      </Form>
      </Modal.Body>
        </Modal>, modalRoot
  );
}
  
export default ModalForm;