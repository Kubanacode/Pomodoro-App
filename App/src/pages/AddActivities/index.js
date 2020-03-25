import React, { useState } from 'react';
import {  View } from 'react-native';
import { IconButton, TextInput, FAB } from 'react-native-paper'

import styles from './styles';

const AddActivities = ({ navigation }) => {
    const [actTitle, setActTitle] = useState('');
    const [actValue, setActValue] = useState('');

    function onSaveActivity() {

        navigation.state.params.newActivity ({actTitle, actValue} );
        navigation.goBack();
    }

    return (
        <>
            <IconButton 
                icon='close'
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />
            <View style={styles.container}>
                <TextInput
                    label='Add Title Here'
                    value={actTitle}
                    mode='outlined'
                    onChangeText={setActTitle}
                    style={styles.title}
                />
                <TextInput
                    label='Add some description Here'
                    value={actValue}
                    onChangeText={setActValue}
                    mode='flat'
                    multiline={true}
                    style={styles.text}
                    scrollEnabled={true}
                    returnKeyType='done'
                    blurOnSubmit={true}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon='check'
                    disabled={actTitle == '' ? true : false}
                    onPress={() => onSaveActivity()}
                />
            </View>
        </>
    )
}

export default AddActivities;
