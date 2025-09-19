import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Upload from "../components/Upload";

const IntroScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>

            <Image
                style={styles.image}
                source={require('../../assets/model.png')} />
            <View style={styles.wrapper}>
                <Text style={styles.text}>Hi, I am your fashion advisor. Let's get you started with creating your mix & match fashion avatar...</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Face")}>
                    <Image
                        source={require('../../assets/arrow_right_circle.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default IntroScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: "80%",
        width: "100%",
        alignSelf: 'center'
    },
    wrapper: {
        borderWidth: 1,
        margin: 5,
        height: "18%"
    },
    text: {
        fontSize: 20,
        padding:
            5
    },
    icon: {
        height: 80,
        width: 80,
        alignSelf: 'flex-end'
    }

})