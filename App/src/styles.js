import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginVertical: 5
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    header: {
        alignItems: "center"
    },
    headerIcon: {
        marginLeft: 15,
    },
    headerTitle: {
        alignItems: "center"
    },
    bottomFab: {
        position: 'absolute',
        bottom: 100,
        right: 16,
        color: '#fff',
        backgroundColor: "#cc1816"
    }
});

export default styles;
