import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Settings = () => {
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: colors.text }}>Settings Screen</Text>
        </View>
    )
}

export default Settings;
