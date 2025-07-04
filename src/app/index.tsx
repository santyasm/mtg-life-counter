import { Link } from 'expo-router';
import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { colors } from '../global/theme';

export default function Index() {
    return (
        <View style={styles.root}>
            <Link href="/settings" style={styles.text}>
                Go to Settings
            </Link>
        </View>
    );
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
