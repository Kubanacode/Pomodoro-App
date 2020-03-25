import React, { useState } from 'react';
import { View } from 'react-native';
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
                    (<View style={styles.list}>
                        {activities.map((item, key) => (
                            <View key={key} style={styles.listItems}>
                                <View>
                                    <List.Icon  
                                        icon="timer"
                                        color="#2E7166"
                                    />
                                </View>
                                <View>
                                    <Text style={styles.listTitle}>{item.actTitle}</Text>
                                    <Text style={styles.listDescription}>{item.actValue}</Text>
                                </View>
                            
                            </View>
                        )
                    )}</View>)
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
