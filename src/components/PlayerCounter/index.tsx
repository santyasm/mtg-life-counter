import { defaultTheme } from "@/styles/themes/default";
import { FC } from "react";
import { Container, Content, ManaSymbolContainer, Name } from "./styles";

import Black from "@/assets/svgs/mana-symbols/black.svg";
import Blue from "@/assets/svgs/mana-symbols/blue.svg";
import Green from "@/assets/svgs/mana-symbols/green.svg";
import Red from "@/assets/svgs/mana-symbols/red.svg";
import White from "@/assets/svgs/mana-symbols/white.svg";

interface Props {
    player: {
        id: number;
        name: string;
        life: number;
        color: keyof typeof defaultTheme.colors.manaSymbols;
    };
    rotate: string;
    rows: number;
    columns: number;
}

const getSvgManaSymbol = (color: string) => {
    switch (color) {
        case "blue":
            return Blue;
        case "red":
            return Red;
        case "black":
            return Black;
        case "white":
            return White;
        case "green":
            return Green;
        default:
            return Black;
    }
};

export const PlayerCounter: FC<Props> = ({ player, rotate, rows, columns }) => {
    const ManaSymbol = getSvgManaSymbol(player.color);

    return (
        <Container bgColor={player.color} rotate={rotate} rows={rows} columns={columns}>
            <Content rotate={rotate}>

                <ManaSymbolContainer>
                    <ManaSymbol width={columns > 1 ? 160 : 400} height={columns > 1 ? 160 : 400} />
                </ManaSymbolContainer>
                <Name>{player.name}</Name>
            </Content>
        </Container>
    );
};
