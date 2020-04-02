import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const Search = () => {
    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{color: colors.text }}>Search Screen</Text>
        </View>
    )
}

export default Search;
