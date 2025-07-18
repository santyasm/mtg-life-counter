import { styled } from "styled-components/native";

export const ButtonContainer = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 6px;
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: 500;
`;
