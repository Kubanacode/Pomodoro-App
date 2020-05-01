import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Portal, FAB, useTheme } from 'react-native-paper';
import { useSafeArea } from 'react-native-safe-area-context';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home         from './screens/Home';
import Profile      from './screens/Profile';
import Search       from './screens/Search';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = (props) => {
    const isFocused = useIsFocused();
    const safeArea = useSafeArea();
    const theme = useTheme();
    const navigator = useNavigation();

    const routeName = props.route.state
    ? props.route.state.routes[props.route.state.index].name
    : 'Home';

    return (
        <React.Fragment>
            <Tab.Navigator
                initialRouteName="Home"
                shifting={true}
                activeColor={theme.colors.primary}
            >
                <Tab.Screen 
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: (() => (<Icon name="user" color={theme.colors.primary} size={25} />) ),
                        tabBarColor: theme.colors.card
                    }}
                />
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (() => (<Icon name="home" color={theme.colors.primary} size={25} />) ),
                        tabBarColor: theme.colors.card
                    }}
                />
                <Tab.Screen 
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: (() => (<Icon name="search" color={theme.colors.primary} size={25} />) ),
                        tabBarColor: theme.colors.card
                    }}
                    style={{
                        color: theme.colors.primary
                    }}
                />
            </Tab.Navigator>
            {routeName === 'Home' ?
                (<Portal>
                    <FAB
                        visible={isFocused}
                        icon="plus"
                        color={theme.colors.card}
                        style={{
                            position: 'absolute',
                            bottom: safeArea.bottom + 65,
                            right: 16,
                            backgroundColor: theme.colors.primary
                        }}
                        onPress={() => navigator.navigate('AddActivity')}
                    />
                </Portal>) :
                (<></>)
            }
            
        </React.Fragment>
    )
}

export default BottomTabs;