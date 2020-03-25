import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    iconButton: {
        backgroundColor: 'rgba(46, 113, 102, 0.8)',
        position: 'absolute',
        right: 0,
        top: 0,
        margin: 10,
        zIndex: 2
    },
    header: {
        paddingVertical: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 24
    },
    description: {
        fontSize: 16,
        color: "#888",
        textAlign: "center"
    },
    tasksContainerTitle: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    tasksTitle: {
        fontSize: 22,
    },
    tasksAddIcon: {
        backgroundColor: 'rgba(46, 113, 102, 0.8)',
        marginHorizontal: 10
    },
    taskItem: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        paddingVertical: 5
    },
    taskText: {
        fontSize: 18
    },
    taskInput: {
        height: 50,
        fontSize: 16,
        backgroundColor: "#fafafa",
        borderRadius: 5,
        paddingHorizontal: 10
    }
});

export default styles;
