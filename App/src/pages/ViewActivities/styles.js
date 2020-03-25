import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    title: {
        fontSize: 20
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 10
    },
    list: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    listItems: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingVertical: 4,
        flexDirection: "row"
    },
    listTitle: {
        fontSize: 18,
        color: "#333"
    },
    listDescription: {
        fontSize: 14,
        color: "#888"
    },
})

export default styles;
