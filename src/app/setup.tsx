import { router, useLocalSearchParams } from "expo-router";
import { Alert, Text } from "react-native";


const Setup = () => {
    const { name } = useLocalSearchParams();


    const back = () => {
        if (!router.canGoBack()) {
            return Alert.alert("Can't go back")
        }
        router.back();
    }

    return (
        <Text>
            Setup
        </Text>
    )
}


export default Setup;