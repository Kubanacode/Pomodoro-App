import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack     from './stack';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const RootNavigator = ({theme, toggleTheme}) => {    
    return (
        <Drawer.Navigator drawerContent={props => <DrawerContent theme={theme} {...props}  toggleTheme={toggleTheme} />}>
            <Drawer.Screen name="Home" theme={theme} component={HomeStack} />
        </Drawer.Navigator>
    )
}
export default RootNavigator;
