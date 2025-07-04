import { colors } from "@/global/theme";
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";


const Home = () => {
    return (
        <View style={styles.root}>
            <Link href="/" style={styles.text}>
                Voltar para Home
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white,
        fontSize: 20
    },
});

export default Home;