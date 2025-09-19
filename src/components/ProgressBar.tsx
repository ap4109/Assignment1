import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';


interface CustomProgressBarProps {
  progress?: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  animationDuration?: number;
  onProgressComplete?: () => void
}

const ProgressBar: React.FC<CustomProgressBarProps> = ({
  progress = 0,
  width = 300,
  height = 20,
  backgroundColor = '#e0e0e0',
  progressColor = '#0000',
  animationDuration = 500,
  onProgressComplete
}) => {

  const progressAnim = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: animationDuration,
      useNativeDriver: false,
    }).start(({ finished }) => {

      if (finished && progress >= 100 && onProgressComplete) {
        onProgressComplete();
      }
    });
  }, [progress, animationDuration, onProgressComplete])


  const progressWidth = progressAnim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={[styles.container, { width, height, backgroundColor }]}>
      <Animated.View
        style={[
          styles.progress,
          {
            width: progressWidth,
            backgroundColor: progressColor,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    borderRadius: 10,
  },
});

export default ProgressBar;