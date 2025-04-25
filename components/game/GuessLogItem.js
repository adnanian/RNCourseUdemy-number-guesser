import { StyleSheet, Text, View } from "react-native";
import CustomColors from "../../constants/colors";

export default function GuessLogItem({ roundNumber, guessValue }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{roundNumber}</Text>
            <Text style={styles.itemText}>Opponent's Guess: {guessValue}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: CustomColors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: CustomColors.accent500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    itemText: {
        fontFamily: 'open-sans'
    }
})