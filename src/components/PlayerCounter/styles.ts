import { defaultTheme } from "@/styles/themes/default";
import { Dimensions } from "react-native";
import { styled } from "styled-components/native";

import { getStatusBarHeight } from "react-native-iphone-screen-helper";

const { width, height } = Dimensions.get("window");

type ContainerProps = {
    bgColor: keyof typeof defaultTheme.colors.manaSymbols;
    rotate: string;
    rows: number;
    columns: number;
    isLastPlayer: boolean;
};

export const Container = styled.View<ContainerProps>`
    background-color: ${({ bgColor, theme }) =>
        theme.colors.manaSymbols[bgColor] || theme.colors.manaSymbols.black};
    align-items: center;
    justify-content: center;
    width: ${({ columns, isLastPlayer }) => `${100 / (isLastPlayer ? 1 : columns)}%`};
    height: ${({ rows, isLastPlayer }) => `${100 / rows}%`};
`;

export const Content = styled.View<{ rotate: string; playersCount: number; isLastPlayer: boolean }>`
    transform: ${({ rotate }) => `rotate(${rotate})`};

    align-items: center;
    justify-content: center;

    width: ${({ playersCount, isLastPlayer }) =>
        playersCount > 2 && !isLastPlayer
            ? `${height * (playersCount > 4 ? 0.3 : 0.4)}px`
            : `${width}px`};
    /* flex: ${({ playersCount, isLastPlayer }) =>
        isLastPlayer || playersCount === 2 ? 1 : playersCount > 4 ? 0.7 : 0.5}; */

    flex: 0.9;
`;

export const Name = styled.Text`
    width: 100%;
    text-align: center;

    align-self: center;

    margin-left: ${getStatusBarHeight()}px;

    top: 0;
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
    position: absolute;

    /* background-color: red; */

    font-family: "Oswald";
    font-weight: 500;
`;

export const LifeContainer = styled.View<{ playersCount: number; isLastPlayer: boolean }>`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    flex: ${({ playersCount, isLastPlayer }) =>
        playersCount === 2 || isLastPlayer ? 1 : playersCount > 4 ? 0.8 : 0.5};
    width: 115%;
    padding: 2% ${getStatusBarHeight()}px 0 ${getStatusBarHeight()}px;
    height: 100%;

    /* background-color: red; */
`;

export const Life = styled.Text<{
    playersCount: number;
    isLastPlayer: boolean;
    fontSize: number;
    value: number;
}>`
    color: ${({ theme, value }) => (value >= 0 ? theme.colors.white : theme.colors.red)};
    /* font-size: ${({ playersCount, isLastPlayer }) =>
        `${(120 / (isLastPlayer || playersCount === 2 ? 2 : 4)) * 2.5}px`}; */
    font-size: ${({ fontSize }) => fontSize}px;

    text-align: center;
    flex: 1;

    overflow-x: hidden;

    font-family: "Oswald";
    font-weight: 800;
`;

export const ManaSymbolContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    opacity: 0.4;
    z-index: 0;
`;
