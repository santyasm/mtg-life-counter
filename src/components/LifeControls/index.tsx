import { Audio } from "expo-av";
import * as Haptics from "expo-haptics";
import { FC } from "react";

import ButtonUiDigital from "../../assets/sounds/button-click-289742.mp3";
import PolygonSvg from "../../assets/svgs/icons/polygon.svg";
import { Container, DecrementButton, Delta, IncrementButton } from "./styles";

interface Props {
    delta: number;
    onIncrementPress: (delta: number) => void;
    onDecrementPress: (delta: number) => void;
}

export const LifeControls: FC<Props> = ({ delta = 1, onIncrementPress, onDecrementPress }) => {
    const SIZE_BUTTON = 30;

    const effect = async () => {
        try {
            const { sound } = await Audio.Sound.createAsync(ButtonUiDigital, {
                shouldPlay: true,
            });

            sound.setOnPlaybackStatusUpdate((status) => {
                if (status.isLoaded && status.didJustFinish) {
                    sound.unloadAsync();
                }
            });

            await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
        } catch (error) {
            console.log("Erro ao tocar som:", error);
        }
    };

    const increment = () => {
        effect();
        onIncrementPress(delta);
    };

    const decrement = () => {
        effect();
        onDecrementPress(delta);
    };

    return (
        <Container>
            <IncrementButton onPress={increment}>
                <PolygonSvg width={SIZE_BUTTON} height={SIZE_BUTTON} />
            </IncrementButton>
            <Delta>{delta}</Delta>

            <DecrementButton onPress={decrement}>
                <PolygonSvg width={SIZE_BUTTON} height={SIZE_BUTTON} />
            </DecrementButton>
        </Container>
    );
};
