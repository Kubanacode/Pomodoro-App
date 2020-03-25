import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, FAB, List } from 'react-native-paper';

import styles from './styles';

const ViewActivities = ({navigation}) => {
    const [activities, setActivities] = useState([]);

    const newActivity = activity => {
        activity.id = activities.length + 1
        setActivities([...activities, activity])
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                {activities.length === 0 ?
                    (<Text style={styles.title}>You do not have any Activities</Text>) :
                    (<FlatList
                        data={activities}
                        renderItem={({ item }) => (
                            <List.Item
                                title={item.actTitle}
                                description={item.actValue}
                                descriptionNumberOfLines={1}
                                left={props => <List.Icon {...props} icon="timer" />}
                            />
                        )}
                        keyExtractor={item => item.id.toString()}
                    />)
                }
            </View>
            <FAB 
                style={styles.fab}
                small
                icon="plus"
                label='Add new Activite'
                onPress={() => navigation.navigate('AddActivities', { newActivity })}
            />
        </View>
    )
}

export default ViewActivities;
