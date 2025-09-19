import React from 'react';
import { View, Image, StyleSheet, Alert, Text, TouchableOpacity } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { requestCameraPermission, requestGalleryPermission } from '../utils/permissions';
interface UploadProps {
    onImageSelected: (uri: string) => void
}

const Upload:React.FC<UploadProps> = ({onImageSelected}) => {
    const handleTakePhoto = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            Alert.alert('Permission denied', 'Camera permission is required.');
            return;
        }

        const result = await launchCamera({
            mediaType: 'photo',
            cameraType: 'front',
            saveToPhotos: true,
        });

        if (result.assets && result.assets.length > 0) {
            const uri =result.assets[0].uri
            onImageSelected(uri)
        }
    };

    const handlePickFromGallery = async () => {
        const hasPermission = await requestGalleryPermission();
        if (!hasPermission) {
            Alert.alert('Permission denied', 'Gallery permission is required.');
            return;
        }

        const result = await launchImageLibrary({
            mediaType: 'photo',
        });

        if (result.assets && result.assets.length > 0) {
             const uri =result.assets[0].uri
            onImageSelected(uri)
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.entity}>
                    <TouchableOpacity onPress={handlePickFromGallery} style={styles.entity}>
                        <Image
                            source={require('../../assets/gallery.png')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.text}>From Gallery</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.entity}>
                    <TouchableOpacity onPress={handleTakePhoto} style={styles.entity}>
                        <Image
                            source={require('../../assets/camera.png')}
                            style={styles.imageStyle}
                        />
                        <Text style={styles.text}>Take a Selfie</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Upload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15, margin: 5
    },
    entity: {
        alignItems: 'center',
    },
    imageStyle: {
        height: 40,
        width: 40
    }
});

