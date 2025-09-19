import React, { useEffect, useState } from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import ProgressBar from './ProgressBar';
interface ImageModalProps {
  visible: boolean;
  imageUrl: string | null;
  onClose: () => void;
}
const ImageModal: React.FC<ImageModalProps> = ({ visible, imageUrl, onClose }) => {
  const [progress, setProgress] = useState<number>(0)
  const [isComplete, setIsComplete] = useState<boolean>(false);
 
  useEffect(() => {


    if (!isComplete) {
      if(visible){

      const interval = setInterval(() => {
        setProgress((prev) => {

          if (prev >= 100) {
            setIsComplete(true)
            clearInterval(interval)
            return 100;
          }
          return prev + 20
        })
      }, 1000)
      return () => clearInterval(interval)

    } else {
      setProgress(0)
    }
  }
  }, [isComplete, visible])

  const handleProgressComplete = () => {
    setProgress(100)
    setIsComplete(true);

  };
  const handleClose = () => {
    setProgress(0)
    setIsComplete(false)
    if (onClose) onClose()
  }

  return (
    <Modal
      visible={visible}
      transparent={false}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.entity}>
        <TouchableOpacity onPress={handleClose} style={styles.entity}>
          <Image
            source={require('../../assets/close.png')}
            style={styles.imageStyle}
          />

        </TouchableOpacity>
      </View>
      <View style={{ alignItems: 'center', flex: 1, justifyContent: 'space-around' }}>
        <Image
          source={require('../../assets/success.png')}
          style={[styles.imageStyle, { height: 200, width: 200, alignSelf: 'center' }]}
        />
        <View style={{ alignItems: 'center' }}>
          <Text style={styles.text}>Selfie captured perfectly!</Text>
          <Text style={styles.text}>Let's build your own fashion avatar</Text>
        </View>
        <ProgressBar
          progress={progress}
          width={300}
          height={10}
          backgroundColor='grey'
          progressColor='black'
          animationDuration={500}
          onProgressComplete={handleProgressComplete}
        />

      </View>

    </Modal>
  );
};

export default ImageModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: 'center',
    alignItems: 'center',
  },
  entity: {
    alignItems: 'flex-end',
    padding: 10
  },
  imageStyle: {
    height: 30,
    width: 30
  },
 
  text: {
    fontWeight: 'bold',
  },
});