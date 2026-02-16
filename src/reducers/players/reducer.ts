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
                // ...state,
                players: action.payload.players,
            };

        case ActionTypes.SET_PLAYER_LIFE:
            return produce(state, (draft) => {
                const index = draft.players.findIndex(
                    (player) => player.id === action.payload.player.id,
                );
                if (index !== -1) {
                    draft.players[index].life = action.payload.life;
                }
            });

        case ActionTypes.SET_PLAYER_COLOR:
            return produce(state, (draft) => {
                const index = draft.players.findIndex(
                    (player) => player.id === action.payload.player.id,
                );
                if (index !== -1) {
                    draft.players[index].color = action.payload.player.color;
                }
            });

        case ActionTypes.SET_PLAYER_NAME:
            return produce(state, (draft) => {
                const index = draft.players.findIndex(
                    (player) => player.id === action.payload.player.id,
                );
                if (index !== -1) {
                    draft.players[index].name = action.payload.player.name;
                }
            });

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
