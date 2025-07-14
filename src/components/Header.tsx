import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { theme } from '@styles/theme';

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.content}>
          <Text style={styles.title}>🎵 Swaddle</Text>
          <Text style={styles.subtitle}>
            Create beautiful Spotify playlists with ease
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: theme.spacing.lg,
    marginTop: theme.spacing.lg,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
  },
  gradient: {
    padding: theme.spacing.lg,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    ...theme.typography.heading1,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.text,
    textAlign: 'center',
    opacity: 0.9,
  },
});

export default Header;