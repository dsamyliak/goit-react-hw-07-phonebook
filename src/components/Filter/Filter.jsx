import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';
import { FormContainer, InputForm } from './Filter.styled';
import { getFilterValue } from 'redux/selectors';

export const Filter = () => {
  const { filter } = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
  return (
    <FormContainer>
      <InputForm
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Enter contact name"
      />
    </FormContainer>
  );
};
