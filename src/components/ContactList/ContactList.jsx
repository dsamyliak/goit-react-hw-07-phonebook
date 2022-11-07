import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { FormContainer, Button, ListItem } from './ContactList.styled';

export const ContactList = () => {
  const items = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <FormContainer>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            {name}: {number}
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
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
