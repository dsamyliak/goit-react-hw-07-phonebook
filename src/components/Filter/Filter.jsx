import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/contactsSlice';
import { FormContainer, InputForm } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <FormContainer>
      <InputForm
        type="text"
        value={filterValue}
        onChange={changeFilter}
        placeholder="Enter contact name"
      />
    </FormContainer>
  );
};
