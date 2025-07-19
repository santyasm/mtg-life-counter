import Black from "@/assets/svgs/mana-symbols/black.svg";
import Blue from "@/assets/svgs/mana-symbols/blue.svg";
import Green from "@/assets/svgs/mana-symbols/green.svg";
import Red from "@/assets/svgs/mana-symbols/red.svg";
import White from "@/assets/svgs/mana-symbols/white.svg";

export const getSvgManaSymbol = (color: string) => {
    switch (color) {
        case "blue":
            return Blue;
        case "red":
            return Red;
        case "black":
            return Black;
        case "white":
            return White;
        case "green":
            return Green;
        default:
            return Black;
    }
};

export const getDynamicFontSize = (value: number): number => {
    const decimals = value.toString()?.length || 0;

    if (decimals <= 2) return 140;
    if (decimals <= 4) return 120;
    if (decimals <= 6) return 90;
    return 48;
};
