import { Pressable, type PressableProps, StyleSheet } from 'react-native';
import { useTheme } from '@/src/shared/lib/hooks/useTheme';
import { ThemedText } from './ThemedText';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

type ButtonProps = PressableProps & {
  title: string;
  variant?: 'primary' | 'stop';
};

export function Button({
  style,
  title,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const theme = useTheme();
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withSpring(0.95);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  const styles = StyleSheet.create({
    button: {
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primary: {
      backgroundColor: theme.palette.primary,
    },
    stop: {
      backgroundColor: theme.palette.stopButton,
    },
    text: {
      color: theme.palette.onPrimary,
      textTransform: 'uppercase',
      letterSpacing: 1.25,
      fontWeight: 'bold',
    },
  });

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      {...rest}
    >
      <Animated.View style={[styles.button, styles[variant], style, animatedStyle]}>
        <ThemedText style={styles.text}>{title}</ThemedText>
      </Animated.View>
    </Pressable>
  );
}
