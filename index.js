import { registerRootComponent } from "expo";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./src/app";

// Expo vai continuar funcionando normalmente
registerRootComponent(App);

// Para builds que esperam o nome do app (hermes ou bundle release)
AppRegistry.registerComponent(appName || "main", () => App);
