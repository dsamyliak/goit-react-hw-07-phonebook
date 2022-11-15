import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contactsSlice';
import PropTypes from 'prop-types';
import { FormContainer, Button, ListItem } from './ContactList.styled';
import { fetchContacts } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';

export const ContactList = () => {
  // const items = useSelector(state => state.contacts.items);
  const { items, isLoading, error } = useSelector(getContacts);
  const { filter } = useSelector(getFilterValue);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <FormContainer>
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <ul>
        {filteredContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            {name}: {phone}
            <Button
              onClick={() =>
                /* dispatch(deleteContact(id)) */ console.log('deleteContact')
              }
            >
              Delete
            </Button>
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
