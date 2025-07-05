
import { defaultTheme } from "@/styles/themes/default";
import { useFonts } from 'expo-font';
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";

export default function Layout() {
    const [loaded, error] = useFonts({
        'Roboto': require('../../assets/fonts/Roboto.ttf'),
        'Roboto Mono': require('../../assets/fonts/RobotoMono.ttf'),
    });

    useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
    )
}