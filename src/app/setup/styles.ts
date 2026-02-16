import { defaultTheme } from "@/styles/themes/default";
import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-screen-helper";
import { styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};

    padding-top: ${getStatusBarHeight() + 28}px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const CancelButton = styled.TouchableOpacity`
    z-index: 1;

    padding: 0 24px;
`;

export const LogoContainer = styled.View`
    position: absolute;
    width: 100%;
    align-items: center;
`;

export const PlayersFormContainer = styled.View`
    margin-top: 56px;
`;

export const Label = styled.Text`
    font-family: "Roboto Mono";

    color: ${({ theme }) => theme.colors.text};

    font-size: 17px;
    font-weight: 500;
    text-align: center;
`;

export const PlayersNumberSelectContainer = styled.FlatList`
    margin-top: 24px;
`;

export const PlayersNumberOption = styled.TouchableOpacity<{
    marginRight?: boolean;
    isSelected: boolean;
}>`
    width: 69px;
    height: 55px;
    border-radius: 6px;
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primary : theme.colors.primary + "40"};

    align-items: center;
    justify-content: center;

    /* opacity: ${(props) => (props.isSelected ? 1 : 0.6)}; */

    margin-right: ${(props) => (props.marginRight ? "16px" : "unset")};
`;

export const PlayersNumberOptionText = styled.Text<{ isSelected: boolean }>`
    font-family: "Roboto Mono";
    font-weight: ${(props) => (props.isSelected ? 700 : 500)};
    font-size: 20px;

    /* text-decoration: ${(props) => (props.isSelected ? "underline" : "none")}; */
    /* text-decoration-color: ${({ theme }) => theme.colors.white}; */

    color: ${({ theme }) => theme.colors.white};
`;

export const SelectStartingLifeContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;

    margin-top: 24px;
`;

export const LifeOptionContainer = styled(PlayersNumberOption)`
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primary : theme.colors.darkGray};
`;

export const LifeOptionText = styled(PlayersNumberOptionText)``;

export const Footer = styled.View`
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 24px ${getBottomSpace() + 32}px 24px;
`;

export const PlayersCustomizationContainer = styled.View`
    margin-top: 32px;
    gap: 16px;
    padding: 0 24px;
`;

export const PlayerRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
`;

export const NameInput = styled.TextInput`
    flex: 1;
    height: 44px;
    border-radius: 6px;
    padding: 0 12px;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGray};
    font-family: "Roboto Mono";
    font-size: 16px;
`;

export const ColorOptionsRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const ColorOption = styled.TouchableOpacity<{
    isSelected: boolean;
    colorName: keyof typeof defaultTheme.colors.manaSymbols;
}>`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme, colorName }) => theme.colors.manaSymbols[colorName]};
    border-width: ${({ isSelected }) => (isSelected ? "2px" : "0px")};
    border-color: ${({ theme }) => theme.colors.white};
`;
