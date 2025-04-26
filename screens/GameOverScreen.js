import { View, Image, StyleSheet, Text, useWindowDimensions, ScrollView } from "react-native";
import Title from '../components/ui/Title';
import CustomColors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useMemo } from "react";

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    const { width, height } = useWindowDimensions();
    const imageSize = useMemo(() => {
        let size = 300;

        if (width < 380) {
            size /= 2;
        }

        if (height < 500) {
            size = 80;
        }

        return size;
    }, [width, height]);

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image source={require('../assets/images/success.png')} style={styles.image} />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

// const deviceWidth = Dimensions.get('window').width;
// const imageContainerSize = deviceWidth < 380 ? 150 : 300;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        // borderRadius: imageContainerSize / 2,
        // width: imageContainerSize,
        // height: imageContainerSize,
        borderWidth: 3,
        borderColor: CustomColors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: CustomColors.primary500
    }
});