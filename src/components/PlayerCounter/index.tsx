import { FC } from "react";
import { Container, Name } from "./styles";


interface Props {
    player: {
        id: number;
        name: string;
        life: number;
        color: string;
    }
}

export const PlayerCounter: FC<Props> = ({ player }) => {
    return (
        <Container bgColor={player.color}>
            {/* <blue /> */}
            <Name>{player.name}</Name>
        </Container>
    );
};