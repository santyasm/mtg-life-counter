import { Player } from "../players/reducer";

export enum ActionTypes {
    SET_INITIAL_PLAYERS_LIFE = "SET_PLAYER_LIFE",
    SET_CURRENT_PLAYERS_COUNT = "SET_CURRENT_PLAYERS_COUNT",
    SET_CURRENT_PLAYERS = "SET_CURRENT_PLAYERS",
}

export const setInitialPlayersLifeAction = (initialPlayersLife: number) => {
    return {
        type: ActionTypes.SET_INITIAL_PLAYERS_LIFE,
        payload: {
            initialPlayersLife,
        },
    };
};

export const setCurrentPlayersCountAction = (playersCount: number) => {
    return {
        type: ActionTypes.SET_CURRENT_PLAYERS_COUNT,
        payload: {
            playersCount,
        },
    };
};

export const setCurrentPlayersAction = (players: Player[]) => {
    return {
        type: ActionTypes.SET_CURRENT_PLAYERS,
        payload: {
            players,
        },
    };
};
