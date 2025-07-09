import { FC, useContext } from "react";
import { Container, Content, Life, LifeContainer, ManaSymbolContainer, Name } from "./styles";

import { PlayersContext } from "@/contexts/PlayersContext";
import { Player } from "@/reducers/players/reducer";
import { Dimensions } from "react-native";
import { LifeControls } from "../LifeControls";
import { getSvgManaSymbol } from "./utils";

const { width, height } = Dimensions.get("window");

interface Props {
    player: Player;
    rotate: string;
    rows: number;
    columns: number;
    playersCount: number;
    index: number;
}

export const PlayerCounter: FC<Props> = ({
    player,
    rotate,
    rows,
    columns,
    playersCount,
    index,
}) => {
    const { incrementLife, decrementLife } = useContext(PlayersContext);

    const ManaSymbol = getSvgManaSymbol(player.color);
    const isLastPlayer = playersCount % 2 !== 0 && index === playersCount - 1;
    const MANA_SYMBOL_SIZE =
        columns > 1 && !isLastPlayer
            ? (width / columns) * 0.9
            : rows > 2
            ? (height / rows) * 0.95
            : 380;

    const handleIncrementPress = (delta: number) => {
        incrementLife(player, delta);
    };

    const handleDecrementPress = (delta: number) => {
        decrementLife(player, delta);
    };

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
                    <LifeControls
                        delta={1}
                        onIncrementPress={handleIncrementPress}
                        onDecrementPress={handleDecrementPress}
                    />
                    <Life playersCount={playersCount} isLastPlayer={isLastPlayer}>
                        {player.life}
                    </Life>
                    <LifeControls
                        delta={5}
                        onIncrementPress={handleIncrementPress}
                        onDecrementPress={handleDecrementPress}
                    />
                    <Name>{player.name}</Name>
                </LifeContainer>
            </Content>
        </Container>
    );
};
