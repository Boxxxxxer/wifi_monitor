import { View, StyleSheet } from 'react-native';
import { Card } from '@/src/shared/ui/Card';
import { ThemedText } from '@/src/shared/ui/ThemedText';
import { useTheme } from '@/src/shared/lib/hooks/useTheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';
import { useEffect } from 'react';

export const StatusCard = () => {
  const theme = useTheme();
  const isConnected = false; // Mock data for now

  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  useEffect(() => {
    if (isConnected) {
      scale.value = withRepeat(
        withTiming(1.2, { duration: 1000, easing: Easing.bezier(0.25, 0.1, 0.25, 1) }),
        -1,
        true
      );
    } else {
      scale.value = withTiming(1, { duration: 500 });
    }
  }, [isConnected, scale]);

  return (
    <Card>
      <View style={styles.statusHeader}>
        <Animated.View style={animatedStyle}>
          <MaterialCommunityIcons
            name={isConnected ? 'wifi' : 'wifi-off'}
            size={48}
            color={isConnected ? theme.palette.success : theme.palette.error}
          />
        </Animated.View>
        <ThemedText type="title" style={styles.statusText}>
          {isConnected ? 'Wi-Fi connected' : 'Wi-Fi disconnected'}
        </ThemedText>
      </View>
      <View style={styles.detailsContainer}>
        <ThemedText type="caption" style={styles.detailLabel}>
          Signal/Speed
        </ThemedText>
        <ThemedText type="body">
          -- Mbps / -- dBm
        </ThemedText>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  statusHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: 16,
  },
  detailsContainer: {
    marginTop: 24,
  },
  detailLabel: {
    marginBottom: 4,
  },
});
