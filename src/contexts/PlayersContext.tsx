import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, FC, ReactNode, useEffect, useReducer } from "react";
import { PLAYERS } from "../constants/Players";
import {
    decrementPlayerLife,
    incrementPlayerLife,
    setPlayersAction,
} from "../reducers/players/actions";
import { Player, playersReducer } from "../reducers/players/reducer";

interface PlayersContextType {
    players: Player[];
    incrementLife: (player: Player, delta: number) => void;
    decrementLife: (player: Player, delta: number) => void;
    setCurrentPlayers: (playersCount: number) => void;
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
                dispatch(setPlayersAction(storedStateAsJSON));
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
            } else {
                dispatch(setPlayersAction(PLAYERS.slice(0, 2)));
            }
        };
        saveState();
    }, [players]);

    const incrementLife = (player: Player, delta: number) => {
        dispatch(incrementPlayerLife(player, delta));
    };

    const decrementLife = (player: Player, delta: number) => {
        dispatch(decrementPlayerLife(player, delta));
    };

    const setCurrentPlayers = (playersCount: number) => {
        // Garante que estamos sempre pegando os N primeiros da lista base
        const basePlayers = PLAYERS.slice(0, playersCount);

        // Atualiza os dados mantendo vida/nome se já existirem
        const updatedPlayers = basePlayers.map((playerFromList) => {
            const existing = players.find((p) => p.id === playerFromList.id);

            return existing
                ? {
                      ...playerFromList,
                      life: existing.life,
                      name: existing.name,
                  }
                : playerFromList;
        });

        // Agora sim: corta qualquer jogador além do limite
        dispatch(setPlayersAction(updatedPlayers));
    };

    return (
        <PlayersContext.Provider
            value={{
                players,
                incrementLife,
                decrementLife,
                setCurrentPlayers,
            }}
        >
            {children}
        </PlayersContext.Provider>
    );
};
