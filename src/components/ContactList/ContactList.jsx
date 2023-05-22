import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BlockContainer, ListItem } from './ContactList.styled';
import {
  getContacts,
  getError,
  getIsLoading,
  getFilterValue,
} from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';



export const ContactList = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const { filter } = useSelector(getFilterValue);

  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
  

  return (
    <BlockContainer>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      <ul style={{ padding: '0px', marginLeft: '10px' }}>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <Contact contact={contact} />
          </ListItem>
        ))}
      </ul>
    </BlockContainer>
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
