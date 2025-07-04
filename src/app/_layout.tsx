import { Slot } from "expo-router";

export const unstable_settings = {
    // Ensure any route can link back to `/`
    initialRouteName: 'Mtg',
};

export default function Layout() {
    return (
        <>
            <Slot />
        </>
    );
}