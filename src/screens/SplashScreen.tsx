import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import RNBootSplash from 'react-native-bootsplash'
import ProgressBar from '../components/ProgressBar';

function SplashScreen() {

  const [progress, setProgress] = useState<number>(0)
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const navigation = useNavigation()


  useEffect(() => {
    RNBootSplash.hide({ fade: false })
    if (isComplete) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 20))
    }, 1000)
    return () => clearInterval(interval)
  }, [isComplete])


  const handleProgressComplete = () => {
    setIsComplete(true);
    navigation.replace('Intro')
    setProgress(0)

  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        resizeMode='contain'
        style={styles.splash}
      />
      <View style={styles.barContainer}>
        <Text style={styles.text}>Loading brands...</Text>

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
    </View>

  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  splash: {
    width: '75%',
    height: "35%",
    alignSelf: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  barContainer: {
    height: "20%",
    width: "80%",
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute', bottom: 100
  },
  barView: {
    height: '100%',
    backgroundColor: "black"
  }

});

export default SplashScreen;
