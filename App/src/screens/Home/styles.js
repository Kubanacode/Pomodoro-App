import { StyleSheet } from 'react-native';

const styles = (props) => StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        width: "90%",
        height: 70,
        marginVertical: 25,
        backgroundColor: props.color
    },
    headerTitle: {
        color: props.color,
        marginHorizontal: 25,
        fontSize: 16,
        fontWeight: "bold"
    },
    headerIcon: {
        marginHorizontal: 25,
    },
    card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        width: "90%",
        height: 55,
        marginVertical: 10,
        
        backgroundColor: props.color,
        borderLeftWidth: 4,
        borderLeftColor: props.border,

        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.00,
        elevation: 5,
    },
    cardTitle: {
        marginHorizontal: 25,
        fontSize: 14
    }
});

export default styles;
