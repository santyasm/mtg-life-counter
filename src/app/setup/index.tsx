import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

import {
    CancelButton,
    Container,
    Header,
    LogoContainer,
    PlayersNumberContainer,
    PlayersNumberLabel,
    PlayersNumberOption,
    PlayersNumberOptionText,
    PlayersNumberSelectContainer,
} from "./styles";

import Logo from "@/assets/svgs/logo.svg";
import { useState } from "react";
import { View } from "react-native";
import { PlayerNumberItem } from "./types";
import { PLAYER_NUMBER_LIST } from "./utils";

const Setup = () => {
    const [playersNumberSelected, setPlayersNumberSelected] = useState(PLAYER_NUMBER_LIST[0]);

    const cancel = () => {
        router.back();
    };

    const handleChangePlayersNumberSelected = (item: PlayerNumberItem) => {
        setPlayersNumberSelected(item);
    };

    return (
        <Container>
            <Header>
                <CancelButton onPress={cancel}>
                    <AntDesign name="back" size={24} color="white" />
                </CancelButton>

                <LogoContainer>
                    <Logo width={69} height={79.18} />
                </LogoContainer>

                <View />
            </Header>

            <PlayersNumberContainer>
                <PlayersNumberLabel>SELECT NUMBER OF PLAYERS</PlayersNumberLabel>

                <PlayersNumberSelectContainer
                    data={PLAYER_NUMBER_LIST}
                    keyExtractor={(item: unknown, index: number) =>
                        `${(item as PlayerNumberItem).value}-${index}`
                    }
                    renderItem={({ item, index }: { item: unknown; index: number }) => (
                        <PlayersNumberOption
                            marginRight={index === 0 || index % 2 !== 0}
                            isSelected={playersNumberSelected === item}
                            onPress={() =>
                                handleChangePlayersNumberSelected(item as PlayerNumberItem)
                            }
                        >
                            <PlayersNumberOptionText isSelected={playersNumberSelected === item}>
                                {(item as PlayerNumberItem).value}
                            </PlayersNumberOptionText>
                        </PlayersNumberOption>
                    )}
                    numColumns={3}
                    contentContainerStyle={{
                        gap: 16,
                        alignItems: "center",
                    }}
                />
            </PlayersNumberContainer>
        </Container>
    );
};

export default Setup;
