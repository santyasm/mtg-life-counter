
import { defaultTheme } from "@/styles/themes/default";
import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";

export default function Layout() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Stack screenOptions={{ headerShown: false }} />
        </ThemeProvider>
    )
}