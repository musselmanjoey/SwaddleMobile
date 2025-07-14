import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import Button from '@components/Button';
import { RootStackParamList } from '@types/index';
import { theme, commonStyles } from '@styles/theme';

type PlaylistCreatedScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'PlaylistCreated'
>;

type PlaylistCreatedScreenRouteProp = RouteProp<
  RootStackParamList,
  'PlaylistCreated'
>;

interface Props {
  navigation: PlaylistCreatedScreenNavigationProp;
  route: PlaylistCreatedScreenRouteProp;
}

const PlaylistCreatedScreen: React.FC<Props> = ({ navigation, route }) => {
  const { playlist, trackResults } = route.params;
  const foundTracks = trackResults.filter(track => track.found);

  const handleDone = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <View style={styles.content}>
        <View style={styles.successSection}>
          <Text style={styles.successEmoji}>🎉</Text>
          <Text style={styles.title}>Playlist Created!</Text>
          <Text style={styles.playlistName}>{playlist.name}</Text>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{foundTracks.length}</Text>
            <Text style={styles.statLabel}>Tracks Added</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{trackResults.length}</Text>
            <Text style={styles.statLabel}>Total Requested</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              {Math.round((foundTracks.length / trackResults.length) * 100)}%
            </Text>
            <Text style={styles.statLabel}>Success Rate</Text>
          </View>
        </View>

        <View style={styles.actionSection}>
          <Button
            onPress={handleDone}
            variant="primary"
            style={styles.doneButton}
          >
            Done
          </Button>
          
          <Text style={styles.spotifyNote}>
            Check your Spotify app to listen to your new playlist!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
    justifyContent: 'space-between',
  },
  successSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successEmoji: {
    fontSize: 64,
    marginBottom: theme.spacing.lg,
  },
  title: {
    ...theme.typography.heading1,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  playlistName: {
    ...theme.typography.heading2,
    color: theme.colors.primary,
    textAlign: 'center',
  },
  statsSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: theme.spacing.xl,
  },
  statCard: {
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.lg,
    minWidth: 80,
  },
  statNumber: {
    ...theme.typography.heading2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  actionSection: {
    alignItems: 'center',
  },
  doneButton: {
    width: '100%',
    marginBottom: theme.spacing.lg,
  },
  spotifyNote: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default PlaylistCreatedScreen;