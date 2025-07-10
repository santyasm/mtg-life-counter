import { PlayersContext } from "@/contexts/PlayersContext";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useContext } from "react";

import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import { PlayerCounter } from "../PlayerCounter";
import { ActionButtonsContainer, Container, PlayersContainer } from "./styles";
import { getGridConfig, getRotation } from "./utils";

export const LifeCounterApp = () => {
    const { players } = useContext(PlayersContext);
    const { columns, rows } = getGridConfig(players.length);

    const goToSetup = () => {
        router.push("/setup");
    };

    return (
        <Container>
            <PlayersContainer>
                <ActionButtonsContainer>
                    <TouchableOpacity activeOpacity={0.7} onPress={goToSetup}>
                        <Ionicons name="settings-sharp" size={32} color="white" />
                    </TouchableOpacity>
                </ActionButtonsContainer>

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
