import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Appbar, useTheme } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import BottomTabs   from './bottomTabs';
import styles       from './styles';

const Stack = createStackNavigator();

const Header = ({ scene, previous, navigation }) => {
    const theme = useTheme();
    const { options } = scene.descriptor;
    const title = 
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.rout.name;
    
    return (
        <Appbar.Header 
            theme={{ colors: { primary: theme.colors.surface } }}
            style={styles.header}
        >
            {previous ? 
                (<Appbar.BackAction 
                    onPress={navigation.pop}
                    color={theme.colors.primary}
                />) :
                (<TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}
                >
                    <Icon
                        style={styles.headerIcon}
                        name="bars"
                        color="#cc1816"
                        size={27}
                    />
                </TouchableOpacity>)
            }
            <Appbar.Content 
                color="#cc1816"
                title={
                    previous ? title : "Pomodoro Manager"
                }
            />
        </Appbar.Header>
    )
}

const HomeStack = () => (
    <Stack.Navigator 
        initialRouteName="Home"
        headerMode="screen"
        screenOptions={{
            header: ({ scene, previous, navigation }) => (
                <Header scene={scene} previous={previous} navigation={navigation} />
            ),
        }}    
    >
        <Stack.Screen 
            name="Home"
            component={BottomTabs}
            options={{ headerTitle: 'Home' }}
        />
    </Stack.Navigator>
)

export default HomeStack;
