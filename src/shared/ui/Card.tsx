import { View, type ViewProps, StyleSheet } from 'react-native';
import { useTheme } from '@/src/shared/lib/hooks/useTheme';

type CardProps = ViewProps;

export function Card({ style, ...rest }: CardProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.palette.surface,
      borderRadius: theme.layout.borderRadius,
      padding: theme.layout.spacing,
    },
  });

  return <View style={[styles.card, style]} {...rest} />;
}
