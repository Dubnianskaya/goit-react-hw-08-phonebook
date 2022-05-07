import { useState } from "react";
import toast from "react-hot-toast";
import NumberForm from "../components/Form";
import ContactList from "../components/ContactList";
import Filter from "../components/Filter";
import { Title } from "../components/StyledComponentsStyles";
import {PagesContainer} from './Pages.styled';
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from "../redux/contactsSlice";

export const Contacts = () => {
  const { data: contacts, isLoading, isError } = useFetchContactsQuery();
  const [addContact, { isLoading: isAdding }] = useCreateContactMutation();
  const [filter, setFilter] = useState("");

  const formSubmitHandler = ({ name, number }) => {
    const normalizedName = name.toLowerCase();
    const nameFilter = (contact) =>
      normalizedName === contact.name.toLowerCase();
    const contactSameNameChecked = contacts.some(nameFilter);

    if (contactSameNameChecked) {
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
        {contacts && <ContactList contactsItems={getVisibleContacts()} />}
      </>
    </div>
    </PagesContainer>
  );
}
