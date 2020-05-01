import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const Home = () => {
    const { colors } = useTheme();
    
    return (
        <View style={styles({}).container}>
            <View style={styles({color: colors.primary}).header }>
                <Text style={styles({color: colors.card}).headerTitle}>ACTIVITES</Text>
                <Icon name="ellipsis-v" color={colors.card} size={25} style={styles({}).headerIcon} />
            </View>
            <View style={styles({
                color: colors.card,
                border: colors.primary
            }).card}>
                <Text style={styles({}).cardTitle}>
                    Pomodoro App
                </Text>
            </View>
            <View style={styles({
                color: colors.card,
                shadow: colors.shadow,
                border: colors.primary
            }).card}>
                <Text style={styles({}).cardTitle}>
                    FMON
                </Text>
            </View>
            <View style={styles({
                color: colors.card,
                shadow: colors.shadow,
                border: colors.primary
            }).card}>
                <Text style={styles({}).cardTitle}>
                    Drag and Drop Checkplant
                </Text>
            </View>
        </View>
    )
}

export default Home;
