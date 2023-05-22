import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { Container, Header3 } from './PhonebookPage.styled';
import { getIsLoading, getError } from 'redux/selectors';


export const PhonebookPage = () => {
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <Header3>Create contact</Header3>
        <ContactForm />
      </Container>
      <Container>
        <Header3>Find by name</Header3>
        <Filter />
        <Header3>Contacts</Header3>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Container>
    </>
  );
};
