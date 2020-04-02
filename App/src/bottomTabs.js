import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Portal, FAB } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home         from './screens/Home';
import Profile      from './screens/Profile';
import Search       from './screens/Search';
import styles from './styles';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
    const isFocused = useIsFocused();

    return (
        <React.Fragment>
            <Tab.Navigator
                initialRouteName="Home"
                shifting={true}
            >
                <Tab.Screen 
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: (() => (<Icon name="home" color="#fff" size={25} />) ),
                        tabBarColor: '#cc1816'
                    }}
                />
                <Tab.Screen 
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: (() => (<Icon name="user" color="#fff" size={25} />) ),
                        tabBarColor: '#cc1816'
                    }}
                />
                <Tab.Screen 
                    name="Search"
                    component={Search}
                    options={{
                        tabBarIcon: (() => (<Icon name="search" color="#fff" size={25} />) ),
                        tabBarColor: '#cc1816'
                    }}
                />
            </Tab.Navigator>
            <Portal>
                <FAB
                    visible={isFocused}
                    icon="feather"
                    style={styles.bottomFab}
                />
            </Portal>
        </React.Fragment>
    )
}

export default BottomTabs;