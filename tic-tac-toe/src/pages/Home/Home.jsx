import { Container } from "./Home.styled.js";
import { Subtitle, Title } from "../../styles/General.styled.js";
import Header from "../../components/Header/header.jsx";

const Home = () => {
  return (
    <Container>
      <Header />
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends , higher score wins</Subtitle>
    </Container>
  );
};

export default Home;
