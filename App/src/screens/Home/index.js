import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Home = () => {
    const { colors } = useTheme();
    
    console.log(colors);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: colors.text }}>Home Screen</Text>
        </View>
    )
}

export default Home;
