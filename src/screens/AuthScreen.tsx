import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '@components/Button';
import { RootStackParamList } from '@types/index';
import { theme, commonStyles } from '@styles/theme';

type AuthScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Auth'>;

interface Props {
  navigation: AuthScreenNavigationProp;
}

const AuthScreen: React.FC<Props> = ({ navigation }) => {
  const handleSpotifyAuth = async () => {
    // TODO: Implement Spotify OAuth flow
    console.log('Starting Spotify authentication...');
    
    // For now, just navigate back
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>Connect to Spotify</Text>
          <Text style={styles.subtitle}>
            Sign in with your Spotify account to create playlists
          </Text>
        </View>

        <View style={styles.authSection}>
          <Button
            onPress={handleSpotifyAuth}
            variant="primary"
            style={styles.authButton}
          >
            Sign in with Spotify
          </Button>
          
          <Text style={styles.disclaimer}>
            We'll only access your public profile and create playlists on your behalf
          </Text>
        </View>

        <Button
          onPress={() => navigation.goBack()}
          variant="secondary"
          style={styles.backButton}
        >
          Go Back
        </Button>
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
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    ...theme.typography.heading1,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  authSection: {
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  authButton: {
    width: '100%',
    marginBottom: theme.spacing.lg,
  },
  disclaimer: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
  backButton: {
    marginBottom: theme.spacing.lg,
  },
});

export default AuthScreen;