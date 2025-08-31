import { View, StyleSheet, Switch } from 'react-native';
import { Card } from '@/src/shared/ui/Card';
import { ThemedText } from '@/src/shared/ui/ThemedText';
import { useTheme } from '@/src/shared/lib/hooks/useTheme';
import { useState } from 'react';

export const SettingsCard = () => {
  const theme = useTheme();
  const [isAutoStartEnabled, setIsAutoStartEnabled] = useState(false);

  return (
    <Card>
      <View style={styles.settingRow}>
        <ThemedText type="body">Auto-start after reboot</ThemedText>
        <Switch
          trackColor={{ false: '#767577', true: theme.palette.secondary }}
          thumbColor={isAutoStartEnabled ? theme.palette.primary : '#f4f3f4'}
          onValueChange={() => setIsAutoStartEnabled(previousState => !previousState)}
          value={isAutoStartEnabled}
        />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
});
