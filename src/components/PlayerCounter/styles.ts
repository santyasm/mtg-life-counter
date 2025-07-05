import { defaultTheme } from "@/styles/themes/default";
import styled from "styled-components/native";

type ContainerProps = {
    bgColor: keyof typeof defaultTheme.colors.manaSymbols;
    rotate: string;
    rows: number;
    columns: number;
};

export const Container = styled.View<ContainerProps>`
    background-color: ${({ bgColor, theme }) => theme.colors.manaSymbols[bgColor] || theme.colors.manaSymbols.black};
    align-items: center;
    justify-content: center;
  width: ${({ columns }) => `${100 / columns}%`};
  height: ${({ rows }) => `${100 / rows}%`};
`;

export const Content = styled.View<{ rotate: string }>`
    transform: ${({ rotate }) => `rotate(${rotate})`};
    /* background-color: red; */
    width: 200%;
    height: 50%;

    align-items: center;
`
export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 28px;
    text-align: center;

    margin-top: 16px;

    font-family: 'Roboto';
    font-weight: 500;
`
export const Life = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 96px;
    text-align: center;

    margin-top: 16px;

    font-family: 'Roboto Mono';
    font-weight: 500;
`

export const ManaSymbolContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;

    opacity: 0.4;
    z-index: 0;
`;