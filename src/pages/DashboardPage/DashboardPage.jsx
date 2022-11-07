import { useLogOutRedirect } from '../../hooks/useLogOutRedirect';
import { Container, Paragraph } from './DashboardPage.styled';

export const DashboardPage = () => {
  useLogOutRedirect();

  return (
    <Container>
      <Paragraph>DashboardPage</Paragraph>
    </Container>
  );
};
