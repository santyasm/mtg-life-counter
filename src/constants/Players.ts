import { Player } from "@/reducers/players/reducer";

export enum ManaColors {
    black = "black",
    red = "red",
    green = "green",
    blue = "blue",
    white = "white",
}

export const PLAYERS: Player[] = [
    { id: 1, name: "Player 1", life: 20, color: ManaColors.red },
    { id: 2, name: "Player 2", life: 20, color: ManaColors.black },
    { id: 3, name: "Player 3", life: 20, color: ManaColors.green },
    { id: 4, name: "Player 4", life: 20, color: ManaColors.blue },
    { id: 4, name: "Player 5", life: 20, color: ManaColors.red },
    { id: 4, name: "Player 6", life: 20, color: ManaColors.white },
];
