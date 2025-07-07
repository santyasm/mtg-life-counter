import { FC } from "react";
import { Container, DecrementButton, Delta, IncrementButton } from "./styles";

import PolygonSvg from "@/assets/svgs/icons/polygon.svg";

interface Props {
    delta: number;
}

export const LifeControls: FC<Props> = ({ delta }) => {
    return (
        <Container>
            <IncrementButton>
                <PolygonSvg width={30} height={30} />
            </IncrementButton>
            <Delta>{delta}</Delta>

            <DecrementButton>
                <PolygonSvg width={30} height={30} />
            </DecrementButton>
        </Container>
    );
};
