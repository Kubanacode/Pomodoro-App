import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Profile = () => {
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: colors.text }}>Profile Screen</Text>
        </View>
    )
}

export default Profile;
