import { View, Text, StyleSheet } from "react-native";
import CustomColors from "../../constants/colors";

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: CustomColors.accent500,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: CustomColors.accent500,
        fontSize: 36,
        fontWeight: 'bold'
    }
})