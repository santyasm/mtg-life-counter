import { Player } from "./reducer";

export enum ActionTypes {
    SET_PLAYERS = "SET_PLAYERS",

    INCREMENT_PLAYER_LIFE = "INCREMENT_PLAYER_LIFE",
    DECREMENT_PLAYER_LIFE = "DECREMENT_PLAYER_LIFE",

    SET_PLAYER_LIFE = "SET_PLAYER_LIFE",

    SET_PLAYER_COLOR = "SET_PLAYER_COLOR",
    SET_PLAYER_NAME = "SET_PLAYER_NAME",
}

export const setPlayersAction = (players: Player[]) => {
    return {
        type: ActionTypes.SET_PLAYERS,
        payload: {
            players,
        },
    };
};

export const incrementPlayerLife = (player: Player, delta: number) => {
    return {
        type: ActionTypes.INCREMENT_PLAYER_LIFE,
        payload: {
            player,
            delta,
        },
    };
};

export const decrementPlayerLife = (player: Player, delta: number) => {
    return {
        type: ActionTypes.DECREMENT_PLAYER_LIFE,
        payload: {
            player,
            delta,
        },
    };
};

export const setPlayerLife = (player: Player, life: number) => {
    return {
        type: ActionTypes.SET_PLAYER_LIFE,
        payload: {
            player,
            life,
        },
    };
};

export const setPlayerColor = (player: Player) => {
    return {
        type: ActionTypes.SET_PLAYER_COLOR,
        payload: {
            player,
        },
    };
};

export const setPlayerName = (player: Player) => {
    return {
        type: ActionTypes.SET_PLAYER_NAME,
        payload: {
            player,
        },
    };
};
