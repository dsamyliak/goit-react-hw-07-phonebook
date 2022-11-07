import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLocalStorage } from 'redux/contactsSlice';
import { Container, Header3 } from './PhonebookPage.styled';

export const PhonebookPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const contactsStorage = localStorage.getItem('contacts');

    const parsedContacts = JSON.parse(contactsStorage);

    if (!parsedContacts) {
      return;
    }
    dispatch(updateLocalStorage(parsedContacts));
  }, [dispatch]);

  return (
    <Container>
      <Container>
        <h1>Phonebook</h1>
        <Header3>Create contact</Header3>
        <ContactForm />
      </Container>
      <Container>
        <Header3>Find by name</Header3>
        <Filter />
        <Header3>Contacts</Header3>
        <ContactList />
      </Container>
    </Container>
  );
};
