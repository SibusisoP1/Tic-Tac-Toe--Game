import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
`;
