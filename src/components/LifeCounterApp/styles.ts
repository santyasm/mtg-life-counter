import { styled } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const PlayersContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    flex: 1;
`;

export const ActionButtonsContainer = styled.View`
    position: absolute;
    align-self: center;
    z-index: 1;
`;
