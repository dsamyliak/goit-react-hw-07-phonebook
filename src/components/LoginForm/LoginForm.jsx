import { useDispatch } from 'react-redux';
import { logIn, logPassword } from 'redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { FormContainer, InputForm, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(logIn(form.elements.login.value));
    dispatch(logPassword(form.elements.password.value));
    form.reset();
    navigate('/dashboard', { replace: true });
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <InputForm type="text" name="login" placeholder="login" />
      <InputForm type="text" name="password" placeholder="password" />
      <Button type="submit">Log In</Button>
    </FormContainer>
  );
};
