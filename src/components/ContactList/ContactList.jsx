import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FormContainer, ListItem } from './ContactList.styled';
import {
  getContacts,
  getError,
  getIsLoading,
  getFilterValue,
} from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  // const items = useSelector(state => state.contacts.items);
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const { filter } = useSelector(getFilterValue);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <FormContainer>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul style={{ padding: '0px', marginLeft: '10px' }}>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            {/* <ContactTextInfo>
              {name}: {phone}
            </ContactTextInfo>
            <Button onClick={console.log(id[0], name[0], phone[0])}>
              Delete
            </Button> */}
            <Contact contact={contact} />
          </ListItem>
        ))}
      </ul>
    </FormContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
