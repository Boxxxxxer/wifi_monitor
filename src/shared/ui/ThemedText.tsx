import { Text, type TextProps, StyleSheet } from 'react-native';
import { useTheme } from '@/src/shared/lib/hooks/useTheme';

type ThemedTextProps = TextProps & {
  type?: 'headline' | 'title' | 'body' | 'caption';
};

export function ThemedText({
  style,
  type = 'body',
  ...rest
}: ThemedTextProps) {
  const theme = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: theme.palette.text,
      ...theme.typography[type],
    },
  });

  return <Text style={[styles.text, style]} {...rest} />;
}
