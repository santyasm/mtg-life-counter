import { FC } from "react";
import { Container, DecrementButton, Delta, IncrementButton } from "./styles";

import PolygonSvg from "@/assets/svgs/icons/polygon.svg";

interface Props {
    delta: number;
}

export const LifeControls: FC<Props> = ({ delta }) => {
    const SIZE_BUTTON = 30;

    return (
        <Container>
            <IncrementButton>
                <PolygonSvg width={SIZE_BUTTON} height={SIZE_BUTTON} />
            </IncrementButton>
            <Delta>{delta}</Delta>

            <DecrementButton>
                <PolygonSvg width={SIZE_BUTTON} height={SIZE_BUTTON} />
            </DecrementButton>
        </Container>
    );
};
