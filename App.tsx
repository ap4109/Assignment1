import React from "react";
import {
  createStaticNavigation,

} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "./src/screens/SplashScreen";
import IntroScreen from "./src/screens/IntroScreen";
import FaceUploaderScreen from "./src/screens/FaceUploadScreen";
import { Text, View } from "react-native";
const RootStack = createNativeStackNavigator({
  initialRouteName: 'Splash',
  screens: {
    Splash:{
      screen:SplashScreen,
      options:{
        headerShown:false
      }
    },
    Intro: {
      screen:IntroScreen,
       options:{
         headerShown:false
      }
    },
    Face:{
      screen:FaceUploaderScreen,
      options:{
        headerBackVisible:false,
        headerTitle:()=>(
          <View>
            <Text style={{color:"#909090"}}>Facial Attributes</Text>
            <Text style={{fontSize:22,fontWeight:'600'}}>Let's add a Photo</Text>
          </View>
        )
      }
    }
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}