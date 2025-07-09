import { FC } from "react";
import { Container, DecrementButton, Delta, IncrementButton } from "./styles";

import PolygonSvg from "@/assets/svgs/icons/polygon.svg";

interface Props {
    delta: number;
    onIncrementPress: (delta: number) => void;
    onDecrementPress: (delta: number) => void;
}

export const LifeControls: FC<Props> = ({ delta, onIncrementPress, onDecrementPress }) => {
    const SIZE_BUTTON = 30;

    const increment = () => {
        onIncrementPress(delta);
    };

    const decrement = () => {
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
