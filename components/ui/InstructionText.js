import { StyleSheet, Text } from "react-native";
import CustomColors from "../../constants/colors";

export default function InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionText: {
        color: CustomColors.accent500,
        fontSize: 24,
        fontFamily: 'open-sans'
    },
})