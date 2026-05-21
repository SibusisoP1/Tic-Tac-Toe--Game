import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.5rem;
  font-family: "poppins", sans-serif;
  font-weight: 200;
  background-color: transparent;
`;
