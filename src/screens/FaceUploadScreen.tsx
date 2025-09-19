import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Upload from "../components/Upload";
import ImageModal from "../components/ImageModal";

const FaceUploaderScreen = () => {

    const [selectedImage, setSetectedImage] = useState<string | null>(null)
    const [modalVisible, setModalVisible] = useState(false)
    const onUpload = () => {
        setModalVisible(true)


    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                {selectedImage ?
                    <>
                        <View style={styles.imageCircle}>
                            <Image
                                source={{ uri: selectedImage }}
                                style={styles.image} />
                        </View>
                        <TouchableOpacity style={styles.button}
                            onPress={onUpload}
                        >
                            <Text style={{ color: "white" }}>Upload</Text>
                        </TouchableOpacity>

                    </> :
                    <Upload onImageSelected={(uri: React.SetStateAction<string | null>) => setSetectedImage(uri)} />
                }
            </View>
            <ImageModal
                visible={modalVisible}
                imageUrl={selectedImage}
                onClose={() => {
                    setModalVisible(false);
                    setSetectedImage(null)
                }

                }
            />
        </View>
    )
}
export default FaceUploaderScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        position: 'relative'
    },
    imageCircle: {
        borderWidth: 2,
        height: 300,
        width: 300,
        borderRadius: 150,
        overflow: 'hidden',
        borderColor: '#20ee09',
        top: 70,
        position: 'absolute',
        alignSelf: 'center'

    },
    button: {
        backgroundColor: "black",
        alignItems: 'center',
        position: 'absolute', bottom: 100, alignSelf: 'center',
        height: '5%',
        width: "95%",
        justifyContent: 'center'
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 150,

    }

})
