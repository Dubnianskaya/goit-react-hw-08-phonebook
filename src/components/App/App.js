import { useState, memo } from "react";
import toast, { Toaster } from "react-hot-toast";
import Form from "../Form";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { Container, PhonebookTitle, ContactsTitle } from "./App.styled";
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "../../redux/contactsSlice";

function App() {
  const { data: contacts, isLoading, isError } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();
  const [filter, setFilter] = useState("");

  const formSubmitHandler = ({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    const nameFilter = (contact) =>
      normalizedName === contact.name.toLowerCase();
    const contactSameNameChecked = contacts.some(nameFilter);

    if (contactSameNameChecked) {
      return toast.error(`${name} is already in contacts`);
    } else {
      addContact({ name, phone });
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
    <Container>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <Form onSubmit={formSubmitHandler} adding={isAdding} />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter value={filter} onFilterChange={changeFilter} />
      <>
        {isError && <h2>Something went wrong :(</h2>}
        {isLoading && <h2>Loading contacts...</h2>}
        {contacts && <ContactList contactsItems={getVisibleContacts()} />}
      </>
      <Toaster />
    </Container>
  );
}

export default memo(App);
