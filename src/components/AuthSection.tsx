import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from './Button';
import { UseSpotifyAuthReturn, RootStackParamList } from '@types/index';
import { theme, commonStyles } from '@styles/theme';

type AuthSectionNavigationProp = StackNavigationProp<RootStackParamList>;

interface Props {
  auth: UseSpotifyAuthReturn;
  navigation: AuthSectionNavigationProp;
}

const AuthSection: React.FC<Props> = ({ auth, navigation }) => {
  const handleSignIn = () => {
    navigation.navigate('Auth');
  };

  const handleSignOut = async () => {
    await auth.logout();
  };

  if (auth.loading) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.loadingText}>Connecting to Spotify...</Text>
        </View>
      </View>
    );
  }

  if (auth.isAuthenticated && auth.user) {
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.welcomeText}>
            Welcome back, {auth.user.display_name}!
          </Text>
          <Text style={styles.statusText}>
            Connected to Spotify
          </Text>
          
          <Button
            onPress={handleSignOut}
            variant="secondary"
            style={styles.signOutButton}
          >
            Sign Out
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Connect to Spotify</Text>
        <Text style={styles.description}>
          Sign in with your Spotify account to create and manage playlists
        </Text>
        
        <Button
          onPress={handleSignIn}
          variant="primary"
          style={styles.signInButton}
        >
          Sign in with Spotify
        </Button>
        
        {auth.error && (
          <Text style={styles.errorText}>{auth.error}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: theme.spacing.lg,
  },
  card: {
    ...commonStyles.card,
    alignItems: 'center',
  },
  title: {
    ...theme.typography.heading2,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: theme.spacing.lg,
  },
  welcomeText: {
    ...theme.typography.heading2,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  statusText: {
    ...theme.typography.body,
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.lg,
  },
  loadingText: {
    ...theme.typography.body,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  signInButton: {
    width: '100%',
  },
  signOutButton: {
    width: '100%',
  },
  errorText: {
    ...theme.typography.caption,
    color: theme.colors.error,
    textAlign: 'center',
    marginTop: theme.spacing.md,
  },
});

export default AuthSection;