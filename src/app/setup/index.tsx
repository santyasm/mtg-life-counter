import AntDesign from "@expo/vector-icons/AntDesign";
import * as Haptics from "expo-haptics";

import UiDigitalSound from "@/assets/sounds/button-click-289742.mp3";
import { Audio } from "expo-av";
import { router } from "expo-router";

import {
    CancelButton,
    ColorOption,
    ColorOptionsRow,
    Container,
    Footer,
    Header,
    Label,
    LifeOptionContainer,
    LifeOptionText,
    LogoContainer,
    NameInput,
    PlayerRow,
    PlayersCustomizationContainer,
    PlayersFormContainer,
    PlayersNumberOption,
    PlayersNumberOptionText,
    PlayersNumberSelectContainer,
    SelectStartingLifeContainer,
} from "./styles";

import Logo from "@/assets/svgs/logo.svg";
import { Button } from "@/components/Button";
import { ManaColors, PLAYERS } from "@/constants/Players";
import { PlayersContext } from "@/contexts/PlayersContext";
import { defaultTheme } from "@/styles/themes/default";
import { useContext, useEffect, useMemo, useState } from "react";
import { View, ScrollView } from "react-native";
import { PlayerNumberItem, PlayerStartingLifeItem } from "./types";
import { PLAYERS_NUMBER_LIST, PLAYERS_STARTING_LIFE_LIST } from "./utils";
import { getBottomSpace } from "react-native-iphone-screen-helper";

const Setup = () => {
    const { setCurrentPlayers, players, setPlayerName, setPlayerColor } =
        useContext(PlayersContext);

    const [playersNumberSelected, setPlayersNumberSelected] = useState(
        PLAYERS_NUMBER_LIST.find((p) => p.value === players.length),
    );
    const [playersStartingLifeSelected, setPlayersStartingLifeSelected] = useState(
        PLAYERS_STARTING_LIFE_LIST[0],
    );

    const [customizationDraft, setCustomizationDraft] = useState<
        Record<number, { name: string; color: ManaColors }>
    >({});

    useEffect(() => {
        const initial: Record<number, { name: string; color: ManaColors }> = {};
        players.forEach((p) => {
            initial[p.id] = { name: p.name, color: p.color };
        });
        setCustomizationDraft((prev) => ({ ...initial, ...prev }));
    }, [players]);

    const displayPlayers = useMemo(() => {
        const count = playersNumberSelected?.value ?? players.length;
        const base = PLAYERS.slice(0, count);
        return base.map((bp) => {
            const existing = players.find((p) => p.id === bp.id);
            return existing ?? bp;
        });
    }, [playersNumberSelected, players]);

    const back = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        router.back();
    };

    const handleChangePlayersNumberSelected = async (item: PlayerNumberItem) => {
        try {
            const { sound } = await Audio.Sound.createAsync(UiDigitalSound, {
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
        const { sound } = await Audio.Sound.createAsync(UiDigitalSound, {
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

    const save = () => {
        const nextCount = playersNumberSelected?.value!;
        setCurrentPlayers(nextCount);
        setTimeout(() => {
            const ids = PLAYERS.slice(0, nextCount).map((p) => p.id);
            ids.forEach((id) => {
                const draft = customizationDraft[id];
                if (draft) {
                    const ctxPlayer =
                        players.find((p) => p.id === id) ??
                        ({
                            id,
                            name: draft.name,
                            life: 20,
                            color: draft.color,
                        } as any);
                    setPlayerName(ctxPlayer, draft.name);
                    setPlayerColor(ctxPlayer, draft.color);
                }
            });
            back();
        }, 0);
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

            <ScrollView
                contentContainerStyle={{
                    paddingBottom: getBottomSpace() + 140,
                }}
            >
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

                <PlayersFormContainer>
                    <Label>CUSTOMIZE PLAYERS</Label>
                    <PlayersCustomizationContainer>
                        <Label>Players: {playersNumberSelected?.value ?? players.length}</Label>
                        {displayPlayers.map((player) => {
                            const draft = customizationDraft[player.id] ?? {
                                name: player.name,
                                color: player.color,
                            };
                            const existsInContext = !!players.find((p) => p.id === player.id);
                            return (
                                <PlayerRow key={player.id}>
                                    <NameInput
                                        value={draft.name}
                                        placeholder="Nome do Player"
                                        placeholderTextColor="#9BA1A6"
                                        onChangeText={(text) => {
                                            setCustomizationDraft((prev) => ({
                                                ...prev,
                                                [player.id]: { ...draft, name: text },
                                            }));
                                            if (existsInContext) {
                                                setPlayerName(player, text);
                                            }
                                        }}
                                    />
                                    <ColorOptionsRow>
                                        {Object.values(ManaColors).map((color) => (
                                            <ColorOption
                                                key={`${player.id}-${color}`}
                                                isSelected={draft.color === color}
                                                colorName={
                                                    color as keyof typeof defaultTheme.colors.manaSymbols
                                                }
                                                activeOpacity={0.7}
                                                onPress={() => {
                                                    setCustomizationDraft((prev) => ({
                                                        ...prev,
                                                        [player.id]: { ...draft, color },
                                                    }));
                                                    if (existsInContext) {
                                                        setPlayerColor(player, color);
                                                    }
                                                }}
                                            />
                                        ))}
                                    </ColorOptionsRow>
                                </PlayerRow>
                            );
                        })}
                    </PlayersCustomizationContainer>
                </PlayersFormContainer>
            </ScrollView>

            <Footer>
                <Button title="Save" onPress={save} />
            </Footer>
        </Container>
    );
};

export default Setup;
