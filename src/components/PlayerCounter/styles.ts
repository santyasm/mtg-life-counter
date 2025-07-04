import { defaultTheme } from "@/styles/themes/default";
import styled from "styled-components/native";

type ContainerProps = {
    bgColor: keyof typeof defaultTheme.colors.manaSymbols;
};

export const Container = styled.View<ContainerProps>`
    flex: 1;
    background-color: ${({ bgColor, theme }) => theme.colors.manaSymbols[bgColor] || theme.colors.manaSymbols.black};
    align-items: center;
    justify-content: center;
    width: 100%;
`;

export const Name = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: 32px;
`
