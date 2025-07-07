import { defaultTheme } from "@/styles/themes/default";
import { FC } from "react";
import { Container, Content, Life, LifeContainer, ManaSymbolContainer, Name } from "./styles";

import Black from "@/assets/svgs/mana-symbols/black.svg";
import Blue from "@/assets/svgs/mana-symbols/blue.svg";
import Green from "@/assets/svgs/mana-symbols/green.svg";
import Red from "@/assets/svgs/mana-symbols/red.svg";
import White from "@/assets/svgs/mana-symbols/white.svg";
import { Dimensions } from "react-native";
import { LifeControls } from "../LifeControls";

const { width, height } = Dimensions.get("window");

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
    playersCount: number;
    index: number;
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

export const PlayerCounter: FC<Props> = ({
    player,
    rotate,
    rows,
    columns,
    playersCount,
    index,
}) => {
    const ManaSymbol = getSvgManaSymbol(player.color);
    const isLastPlayer = playersCount % 2 !== 0 && index === playersCount - 1;
    const MANA_SYMBOL_SIZE =
        columns > 1 && !isLastPlayer
            ? (width / columns) * 0.9
            : rows > 2
            ? (height / rows) * 0.95
            : 380;

    return (
        <Container
            bgColor={player.color}
            rotate={rotate}
            rows={rows}
            columns={columns}
            isLastPlayer={isLastPlayer}
        >
            <Content rotate={rotate} playersCount={playersCount} isLastPlayer={isLastPlayer}>
                <ManaSymbolContainer>
                    <ManaSymbol width={MANA_SYMBOL_SIZE} height={MANA_SYMBOL_SIZE} />
                </ManaSymbolContainer>

                <LifeContainer playersCount={playersCount} isLastPlayer={isLastPlayer}>
                    <LifeControls delta={1} />
                    <Life playersCount={playersCount} isLastPlayer={isLastPlayer}>
                        {player.life}
                    </Life>
                    <LifeControls delta={5} />
                    <Name>{player.name}</Name>
                </LifeContainer>
            </Content>
        </Container>
    );
};
