import React from 'react';
import { View } from 'react-native';
import { Appbar, Title } from 'react-native-paper';

import styles from './styles';

const Header = ({titleText}) => {
    return (
        <Appbar.Header style={styles.headerContainer}>
            <View style={styles.container}>
                <Title style={styles.title}>
                    {titleText}
                </Title>
            </View>
        </Appbar.Header>
    )
}

export default Header;
