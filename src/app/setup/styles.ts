import { getStatusBarHeight } from "react-native-iphone-screen-helper";
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
