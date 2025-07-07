import { Players } from "@/constants/Players";
import { PlayerCounter } from "../PlayerCounter";
import { Container, PlayersContainer } from "./styles";
import { getGridConfig, getRotation } from "./utils";

export const LifeCounterApp = () => {
    const players = Players.initialPlayers;
    const { columns, rows } = getGridConfig(players.length);

    return (
        <Container>
            <PlayersContainer>
                {players.map((player, index) => {
                    const rotate = getRotation(players.length, index);
                    return (
                        <PlayerCounter
                            playersCount={players.length}
                            player={{ ...player }}
                            key={`${player.id}-${player.name}`}
                            columns={columns}
                            rows={rows}
                            rotate={rotate}
                            index={index}
                        />
                    );
                })}
            </PlayersContainer>
        </Container>
    );
};
