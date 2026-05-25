import { Subtitle, Title, Container } from "../../styles/General.styled.js";
import Button from "../../components/Button/Button.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container $coloumn>
      <Title>Tic Tac Toe</Title>
      <Subtitle>Play with your friends , higher score wins</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
