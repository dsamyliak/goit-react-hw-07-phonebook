import { ContactTextInfo, Button } from 'components/Contact/Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';


export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  

  return (
    <>
      <ContactTextInfo>
        {contact.name}: {contact.phone} - id={contact.id}
      </ContactTextInfo>
      <Button onClick={handleDelete}>Delete</Button>
    </>
  );
};
