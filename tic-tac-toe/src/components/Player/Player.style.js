import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-item: center;
  margin: 6rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    align-items: center;
    margin: 4rem;
  }
`;

export const AvatarWrapper = styled.div`
  div {
    display: flex;
    width: 10rem;
    height: 10rem;
    filter: ${(props) => (props.$isPlayerActive ? "" : "grayscale(90%)")};
  }
`;

export const TimerDisplay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0.5rem;
  color: ${(props) =>
    props.$isWarning ? "#ff4444" : props.theme.colors.primary};
  transition: color 0.3s ease;
  animation: ${(props) =>
    props.$isWarning ? "pulse 0.5s ease-in-out infinite" : "none"};

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`;
