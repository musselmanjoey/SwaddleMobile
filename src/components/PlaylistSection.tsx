import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { UseSpotifyAuthReturn, RootStackParamList } from '@types/index';
import { theme } from '@styles/theme';

type PlaylistSectionNavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  auth: UseSpotifyAuthReturn;
  selectedPreset: string;
  onPresetChange: (preset: string) => void;
  navigation: PlaylistSectionNavigationProp;
}

const PlaylistSection: React.FC<Props> = ({
  auth,
  selectedPreset,
  onPresetChange,
  navigation,
}) => {
  if (!auth.isAuthenticated) {
    return (
      <View style={styles.container}>
        <View style={styles.disabledCard}>
          <Text style={styles.disabledText}>
            Sign in to Spotify to create playlists
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create Playlist</Text>
        <Text style={styles.subtitle}>
          Feature coming soon! This will include preset selection and custom playlist creation.
        </Text>
        
        <Text style={styles.debugText}>
          Selected preset: {selectedPreset}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
  },
  disabledCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    opacity: 0.6,
  },
  title: {
    ...theme.typography.heading2,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    lineHeight: 22,
  },
  disabledText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  debugText: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
    fontStyle: 'italic',
  },
});

export default PlaylistSection;