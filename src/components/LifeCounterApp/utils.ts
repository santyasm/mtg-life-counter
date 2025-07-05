export const getGridConfig = (numPlayers: number) => {
    if (numPlayers === 2) return { columns: 1, rows: 2 };
    if (numPlayers === 3) return { columns: 2, rows: 2 };
    if (numPlayers === 4) return { columns: 2, rows: 2 };
    if (numPlayers === 5) return { columns: 3, rows: 2 };
    if (numPlayers === 6) return { columns: 3, rows: 2 };
    return { columns: 2, rows: 2 }; // fallback
};

export const getRotation = (numPlayers: number, index: number): string => {
    if (numPlayers === 2) {
        // index 0 = topo, index 1 = baixo
        return index === 0 ? "180deg" : "0deg";
    }
    if (numPlayers === 3) {
        if (index === 0) return "90deg";
        if (index === 1 || index === 2) return "-90deg";
    }
    if (numPlayers === 4) {
        if (index === 0 || index === 2) return "90deg";
        if (index === 1 || index === 3) return "-90deg";
    }
    return "0deg"; // default
};
