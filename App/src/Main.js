import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeStack     from './stack';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

const RootNavigator = () => (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeStack} />
    </Drawer.Navigator>
)

export default RootNavigator;
