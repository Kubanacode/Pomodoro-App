import React from 'react';
import { View, Text } from 'react-native';
import { DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { Drawer, TouchableRipple, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const DrawerContent = (props) => (
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
                    onPress={() => {}}
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
                    onPress={() => {}}
                />
            </Drawer.Section>
            <Drawer.Section title="Quick Preferences">
                <TouchableRipple onPress={() => {}}>
                    <View style={styles.preference}>
                        <Text>Dark Theme</Text>
                        <View pointerEvents="none">
                            <Switch value={false} />
                        </View>
                    </View>
                </TouchableRipple>
            </Drawer.Section>
        </View>
    </DrawerContentScrollView>
)

export default DrawerContent;