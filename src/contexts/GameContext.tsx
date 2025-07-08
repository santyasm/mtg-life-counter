import { gameReducer } from "@/reducers/game/reducer";
import { Player } from "@/reducers/players/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, FC, ReactNode, useEffect, useReducer } from "react";

interface GameContextType {
    players: Player[];
}

export const GameContext = createContext<GameContextType>({} as GameContextType);

interface GameContextProviderProps {
    children: ReactNode;
}

const initialGameState = {
    game: {
        id: 0,
        currentPlayers: [],
        playersCount: 0,
        initialPlayersLife: 0,
    },
};

export const GameContextProvider: FC<GameContextProviderProps> = ({ children }) => {
    const [gameState, dispatch] = useReducer(gameReducer, initialGameState);

    useEffect(() => {
        const loadState = async () => {
            const storedStateAsJSON = await AsyncStorage.getItem(
                "@mtg-life-counter:game-state-1.0.0",
            );

            if (storedStateAsJSON) {
                const state = JSON.parse(storedStateAsJSON);
                dispatch({ type: "LOAD_STATE", payload: state });
            }
        };
        loadState();
    }, []);

    useEffect(() => {
        const saveState = async () => {
            await AsyncStorage.setItem(
                "@mtg-life-counter:game-state-1.0.0",
                JSON.stringify(gameState),
            );
        };
        saveState();
    }, [gameState]);

    return (
        <GameContext.Provider
            value={{
                players: gameState.game.currentPlayers,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
