import { PLAYERS } from "@/constants/Players";
import { setPlayers } from "@/reducers/players/actions";
import { Player, playersReducer } from "@/reducers/players/reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, FC, ReactNode, useEffect, useReducer } from "react";

interface PlayersContextType {
    players: Player[];
    dispatch: React.Dispatch<any>; // Se quiser usar fora
}

export const PlayersContext = createContext<PlayersContextType>({} as PlayersContextType);

interface PlayersContextProviderProps {
    children: ReactNode;
}

export const PlayersContextProvider: FC<PlayersContextProviderProps> = ({ children }) => {
    const [playersState, dispatch] = useReducer(playersReducer, {
        players: [],
    });

    const { players } = playersState;

    // Carrega jogadores ao montar
    useEffect(() => {
        const loadState = async () => {
            const storedState = await AsyncStorage.getItem("@mtg-life-counter:players-state-1.0.0");

            const storedStateAsJSON = JSON.parse(storedState!);

            if (!!storedStateAsJSON.length) {
                dispatch(setPlayers(storedStateAsJSON));
            } else {
                console.log("1.2");
                dispatch(setPlayers(PLAYERS));
            }
        };
        loadState();
    }, []);

    // Salva sempre que mudar
    useEffect(() => {
        const saveState = async () => {
            if (!!players.length) {
                await AsyncStorage.setItem(
                    "@mtg-life-counter:players-state-1.0.0",
                    JSON.stringify(players),
                );

                console.log("2");
            }
        };
        saveState();
    }, [players]);

    return (
        <PlayersContext.Provider
            value={{
                players,
                dispatch,
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
};
