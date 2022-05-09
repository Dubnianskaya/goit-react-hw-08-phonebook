import { useState } from "react";
import toast from "react-hot-toast";
import NumberForm from "../components/Form";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { Title } from "../components/styles/StyledComponentsStyles";
import {PagesContainer} from '../components/styles/StyledComponentsStyles';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "../redux/contactsSlice";
import Modal from "../components/ModalForm/ModalForm";

export const Contacts = () => {
  const { data: contacts, isLoading, isError } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [idForChanging, setIdForChanging] = useState("");
  const [modalName, setModalName] = useState("");
  const [modalNumber, setModalNumber] = useState("");

  const handleClose = () => setShowModal(false);
  const handleShow = (id) => {
    setShowModal(true);
    setIdForChanging(id);
  };

  const checkIfContactAlreadyExist = (name) => {
    const normalizedName = name.toLowerCase();
    const nameFilter = (contact) =>
      normalizedName === contact.name.toLowerCase();
    const contactSameNameChecked = contacts.some(nameFilter);
    return contactSameNameChecked;
  }

  const formSubmitHandler = ({ name, number }) => {
    const nameAlreadyExist = checkIfContactAlreadyExist(name);

    if (nameAlreadyExist) {
      return toast.error(`${name} is already in contacts`);
    } else {
      addContact({ name, number });
    }
  };

  const changeFilter = (event) => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <PagesContainer style={{display: "flex", justifyContent: "space-around", alignItems: "baseline"}}>
    <div>
      <Title>Phonebook</Title>
      <NumberForm onSubmit={formSubmitHandler} adding={isAdding} />
    </div>
    <div style={{width: 800}}>
      <Title>Contacts</Title>
      <Filter value={filter} onFilterChange={changeFilter} />
      <>
        {isError && <h2>Something went wrong :(</h2>}
        {isLoading && <h2 style={{textAlign: "center"}}>Loading contacts...</h2>}
        {contacts && <ContactList contactsItems={getVisibleContacts()} openModal={handleShow} changeName={setModalName} changeNumber={setModalNumber}/>}
      </>
    </div>
    <Modal show={showModal} closeModal={handleClose} id={idForChanging} changeName={setModalName} changeNumber={setModalNumber} name={modalName} number={modalNumber}/>
    </PagesContainer>
  );
}
