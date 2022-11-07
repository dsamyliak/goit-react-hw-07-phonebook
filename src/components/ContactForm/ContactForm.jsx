import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { createContact } from 'redux/contactsSlice';
import { FormContainer, InputForm, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      createContact({
        id: nanoid(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputForm type="text" name="name" placeholder="Julie Samyliak" />
      <InputForm type="text" name="number" placeholder="+380121234567" />
      <Button type="submit">Create</Button>
    </FormContainer>
  );
};
