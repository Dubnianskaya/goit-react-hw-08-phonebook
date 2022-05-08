import { createPortal } from "react-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { Form } from "react-bootstrap";
import { useChangeContactMutation } from "../redux/contactsSlice";
import FormInput from "./Form/FormInputs";

const modalRoot = document.querySelector("#modal-root");

function ModalForm({show, closeModal, requestId, isContactExist}) {
  const [changeContact, { isLoading: isRefreshing, isSuccess, isError }] = useChangeContactMutation();
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
    const nameAlreadyExist = isContactExist(name);

    if (nameAlreadyExist) {
      return toast.error(`${name} is already in contacts`);
    } else {
      changeContact({contactId: requestId, changes: { name, number }})
      reset();
      closeModal();
      isSuccess && toast.success('Contact successfully changed');
      isError && toast.error('Something went wrong');
    }
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