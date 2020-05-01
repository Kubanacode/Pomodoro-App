import React, { useState, useRef } from 'react';
import { View } from 'react-native';
import { Button, TextInput, useTheme } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const AddActivity = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const descInput = useRef('');
    const buttonSend = useRef('');
    const theme = useTheme();
    const navigator = useNavigation();

    const handleSubmit = () => {
        navigator.goBack();
    }
    
    return (
        <View style={styles.wrapper}>
            <TextInput 
                style={styles.input}
                label='Activity Title'
                value={title}
                mode='outlined'
                onChangeText={setTitle}
                returnKeyType='next'
                onSubmitEditing={() => descInput.current.focus()}
            />
            <TextInput 
                style={styles.input}
                label='Activity Description'
                value={description}
                mode='outlined'
                onChangeText={setDescription}
                returnKeyType='done'
                scrollEnabled={true}
                blurOnSubmit={true}
                ref={descInput}
                onSubmitEditing={() => handleSubmit()}
            />
            <Button
                ref={buttonSend}
                style={styles.button}
                mode="contained"
                icon="send"
                dark={theme.dark ? false : true}
                onPress={() => handleSubmit()}
            >
                Send
            </Button>
        </View>
    )
}

export default AddActivity;
