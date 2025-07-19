import { PLAYERS } from "@/constants/Players";
import { setCurrentPlayersAction } from "@/reducers/game/actions";
import { gameReducer } from "@/reducers/game/reducer";
import { Player } from "@/reducers/players/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, FC, ReactNode, useEffect, useReducer } from "react";

interface GameContextType {
    players: Player[];
    setCurrentPlayers: (players: Player[]) => void;
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

    // Carrega jogadores ao montar
    useEffect(() => {
        const loadState = async () => {
            const storedState = await AsyncStorage.getItem("@mtg-life-counter:game-state-1.0.0");

            const storedStateAsJSON = JSON.parse(storedState!);

            if (!!storedStateAsJSON.length) {
                dispatch(setCurrentPlayers(storedStateAsJSON));
            }
        };
        loadState();
    }, []);

    // Salva sempre que mudar
    useEffect(() => {
        const saveState = async () => {
            if (!!gameState.game.currentPlayers.length) {
                await AsyncStorage.setItem(
                    "@mtg-life-counter:players-state-1.0.0",
                    JSON.stringify(gameState.game.currentPlayers),
                );
            } else {
                dispatch(setCurrentPlayers(PLAYERS));
            }
        };
        saveState();
    }, [gameState]);

    const setCurrentPlayers = (players: Player[]) => {
        dispatch(setCurrentPlayersAction(players));
    };

    return (
        <GameContext.Provider
            value={{
                players: gameState.game.currentPlayers,
                setCurrentPlayers,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};
