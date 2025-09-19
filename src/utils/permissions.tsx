import {PermissionsAndroid, Platform} from 'react-native';

export async function requestCameraPermission() {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );
    return granted === PermissionsAndroid.RESULTS.GRANTED;
  }
  return true; // iOS handled automatically
}

export async function requestGalleryPermission() {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 33) {
      // Android 13+: new permission
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } else {
      // Older Android: READ_EXTERNAL_STORAGE
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    }
  }
  return true; // iOS handled automatically
}






