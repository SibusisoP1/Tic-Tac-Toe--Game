import { PlayerWrapper, AvatarWrapper, TimerDisplay } from "./Player.style";
import Avatar from "react-nice-avatar";
import { Subtitle } from "../../styles/General.styled";

const Player = ({ player, isPlayerActive, timeLeft }) => {
  return (
    <PlayerWrapper>
      <AvatarWrapper $isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatar} />
      </AvatarWrapper>

      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
      {isPlayerActive ? (
        <TimerDisplay $isWarning={timeLeft <= 3}>{timeLeft}s</TimerDisplay>
      ) : null}
    </PlayerWrapper>
  );
};

export default Player;
