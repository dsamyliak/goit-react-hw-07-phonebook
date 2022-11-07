import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/userSlice';
import { Container, Button, LoginName } from './UserMenu.styled';

export const UserMenu = () => {
  const login = useSelector(state => state.user.login);
  const dispatch = useDispatch();

  return (
    <Container>
      <LoginName>{login}</LoginName>{' '}
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
      </Button>
    </Container>
  );
};
