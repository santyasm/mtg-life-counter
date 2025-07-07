import { styled } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    justify-content: space-between;

    height: 50%;
`;

export const Delta = styled.Text`
    font-size: 24px;
    color: white;
    opacity: 0.5;
    font-family: "Oswald";
    font-size: 32px;
    font-weight: 500;
`;

export const IncrementButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;

    /* width: 10px; */
    /* height: 10px; */
`;

export const DecrementButton = styled(IncrementButton)`
    transform: rotate(180deg);
`;
