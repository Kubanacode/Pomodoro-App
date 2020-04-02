import React, { useContext, useState } from 'react';
import { View } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, TouchableRipple, Switch, Text, useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const DrawerContent = (props) => {
    const { colors } = props.theme;
  
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <Drawer.Section  style={styles.drawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="user"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="sliders"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Settings"
                        onPress={() => {props.navigation.navigate('Settings')}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Quick Preferences">
                    <TouchableRipple onPress={props.toggleTheme}>
                        <View style={styles.preference}>
                            <Text style={{ color: colors.text }}>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch 
                                    value={props.theme.dark}
                                    color={colors.primary}
                                />
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
    )
}

export default DrawerContent;