import { Player } from "../players/reducer";
import { ActionTypes } from "./actions";

export type Game = {
    id: number;
    playersCount: number;
    currentPlayers: Player[];
    initialPlayersLife: number;
};

type State = {
    game: Game;
};

export const gameReducer = (state: State, action: any) => {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_PLAYERS:
            return {
                ...state,
                game: {
                    ...state.game,
                    currentPlayers: action.payload.players,
                },
            };

        case ActionTypes.SET_INITIAL_PLAYERS_LIFE:
            return {
                ...state,
                game: {
                    ...state.game,
                    initialPlayersLife: action.payload.initialPlayersLife,
                },
            };

        case ActionTypes.SET_CURRENT_PLAYERS_COUNT:
            return {
                ...state,
                game: {
                    ...state.game,
                    playersCount: action.payload.playersCount,
                },
            };
        default:
            return state;
    }
};
