import { useSelector } from 'react-redux';
import { UserMenu } from '../UserMenu/UserMenu';
import { Container, Header, Link } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);

  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/phonebook">Phonebook</Link>
          {!isLoggedIn && <Link to="/login">Log In</Link>}
          {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
        </nav>
        {isLoggedIn && <UserMenu />}
      </Header>
    </Container>
  );
};
