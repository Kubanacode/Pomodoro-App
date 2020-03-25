import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { IconButton } from 'react-native-paper';

import styles from './styles';

const ViewActivity = ({ navigation }) => {
    const [activity, setActivity] = useState(navigation.state.params.activity);
    const [newTask, setNewTask] = useState('');

    return (
        <View style={styles.container}>
            <IconButton 
                icon='close'
                size={25}
                color='white'
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
            />
            <View>
                <View style={styles.header}>
                    <Text style={styles.title}>{activity.actTitle}</Text>
                    <Text style={styles.description}>{activity.actValue}</Text>
                </View>
                <View>
                    <View>
                        <TextInput 
                            label="Add new task"
                            value={newTask}
                            onChangeText={setNewTask}
                            style={styles.taskInput}
                            mode='flat'
                            returnKeyType='done'
                            blurOnSubmit={true}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ViewActivity;
