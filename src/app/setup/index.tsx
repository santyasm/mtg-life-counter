import AntDesign from "@expo/vector-icons/AntDesign";
import * as Haptics from "expo-haptics";

import UiDigital from "@/assets/sounds/toque_mp3_whatsapp_som.mp3";
import UiDigital1 from "@/assets/sounds/ui-digital-button-click-gfx-sounds.mp3";
import { Audio } from "expo-av";
import { router } from "expo-router";

import {
    CancelButton,
    Container,
    Footer,
    Header,
    Label,
    LifeOptionContainer,
    LifeOptionText,
    LogoContainer,
    PlayersFormContainer,
    PlayersNumberOption,
    PlayersNumberOptionText,
    PlayersNumberSelectContainer,
    SelectStartingLifeContainer,
} from "./styles";

import Logo from "@/assets/svgs/logo.svg";
import { Button } from "@/components/Button";
import { useState } from "react";
import { View } from "react-native";
import { PlayerNumberItem, PlayerStartingLifeItem } from "./types";
import { PLAYERS_NUMBER_LIST, PLAYERS_STARTING_LIFE_LIST } from "./utils";

const Setup = () => {
    const [playersNumberSelected, setPlayersNumberSelected] = useState(PLAYERS_NUMBER_LIST[0]);
    const [playersStartingLifeSelected, setPlayersStartingLifeSelected] = useState(
        PLAYERS_STARTING_LIFE_LIST[0],
    );

    const back = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        router.back();
    };

    const handleChangePlayersNumberSelected = async (item: PlayerNumberItem) => {
        try {
            const { sound } = await Audio.Sound.createAsync(UiDigital, {
                shouldPlay: true,
            });

            sound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded && status.didJustFinish) {
                    sound.unloadAsync();
                }
            });

            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            setPlayersNumberSelected(item);
        } catch (error) {
            console.log("Erro ao tocar som:", error);
        }
    };

    const handleChangePlayersStartingLifeSelected = async (item: PlayerStartingLifeItem) => {
        const { sound } = await Audio.Sound.createAsync(UiDigital1, {
            shouldPlay: true,
        });

        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded && status.didJustFinish) {
                sound.unloadAsync();
            }
        });

        await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        setPlayersStartingLifeSelected(item);
    };

    return (
        <Container>
            <Header>
                <CancelButton onPress={back}>
                    <AntDesign name="back" size={24} color="white" />
                </CancelButton>

                <LogoContainer>
                    <Logo width={69} height={79.18} />
                </LogoContainer>

                <View />
            </Header>

            <PlayersFormContainer>
                <Label>SELECT NUMBER OF PLAYERS</Label>

                <PlayersNumberSelectContainer
                    data={PLAYERS_NUMBER_LIST}
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
                            activeOpacity={0.7}
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
            </PlayersFormContainer>

            <PlayersFormContainer>
                <Label>STARTING LIFE POSITION</Label>

                <SelectStartingLifeContainer>
                    {PLAYERS_STARTING_LIFE_LIST.map((item, index) => (
                        <LifeOptionContainer
                            key={`${item.value}-${index}`}
                            isSelected={item === playersStartingLifeSelected}
                            onPress={() => handleChangePlayersStartingLifeSelected(item)}
                            activeOpacity={0.7}
                        >
                            <LifeOptionText isSelected={item === playersStartingLifeSelected}>
                                {item.value}
                            </LifeOptionText>
                        </LifeOptionContainer>
                    ))}
                </SelectStartingLifeContainer>
            </PlayersFormContainer>

            <Footer>
                <Button title="Save" />
            </Footer>
        </Container>
    );
};

export default Setup;
