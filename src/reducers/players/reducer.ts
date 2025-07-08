import { ManaColors } from "@/constants/Players";
import { produce } from "immer";
import { ActionTypes } from "./actions";

export type Player = {
    id: number;
    name: string;
    life: number;
    color: ManaColors;
};

export type State = {
    players: Player[];
};

export const playersReducer = (state: State, action: any) => {
    switch (action.type) {
        case ActionTypes.SET_PLAYERS:
            return {
                ...state,
                players: action.payload.players,
            };

        case ActionTypes.INCREMENT_PLAYER_LIFE:
            return produce(state, (draft) => {
                const index = draft.players.findIndex(
                    (player) => player.id === action.payload.player.id,
                );

                draft.players[index].life += action.payload.delta;
            });

        case ActionTypes.DECREMENT_PLAYER_LIFE:
            return produce(state, (draft) => {
                const index = draft.players.findIndex(
                    (player) => player.id === action.payload.player.id,
                );

                draft.players[index].life -= action.payload.delta;
            });

        default:
            return state;
    }
};
