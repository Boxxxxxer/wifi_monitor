import { View, StyleSheet, SafeAreaView } from 'react-native';
import { ThemedText } from '@/src/shared/ui/ThemedText';
import { StatusCard } from '@/src/widgets/StatusCard/ui/StatusCard';
import { SettingsCard } from '@/src/widgets/SettingsCard/ui/SettingsCard';
import { Button } from '@/src/shared/ui/Button';
import { useTheme } from '@/src/shared/lib/hooks/useTheme';
import { useState } from 'react';

export default function MainScreen() {
  const theme = useTheme();
  const [isMonitoring, setIsMonitoring] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.palette.background,
      padding: theme.layout.spacing,
    },
    header: {
      marginTop: 24,
      marginBottom: 24,
      paddingHorizontal: theme.layout.spacing,
    },
    cardsContainer: {
      gap: theme.layout.spacing,
    },
    buttonContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: 24,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="headline">WiFi Monitor</ThemedText>
      </View>

      <View style={styles.cardsContainer}>
        <StatusCard />
        <SettingsCard />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title={isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
          variant={isMonitoring ? 'stop' : 'primary'}
          onPress={() => setIsMonitoring(prev => !prev)}
        />
      </View>
    </SafeAreaView>
  );
}