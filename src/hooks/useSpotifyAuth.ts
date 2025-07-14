import { useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UseSpotifyAuthReturn, SpotifyUser, AuthResult } from '@types/index';

// TODO: Import actual Spotify service once migrated
// import spotifyService from '@services/spotify';

export const useSpotifyAuth = (): UseSpotifyAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<SpotifyUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Check for existing token on app start
  useEffect(() => {
    const checkExistingAuth = async () => {
      try {
        const token = await AsyncStorage.getItem('spotify_token');
        if (token) {
          // TODO: Validate token with Spotify API
          // For now, just simulate authentication
          setIsAuthenticated(true);
          setUser({
            id: 'demo_user',
            display_name: 'Demo User',
            email: 'demo@example.com',
            country: 'US',
            followers: { total: 0 },
            images: [],
          });
        }
      } catch (err) {
        console.error('Failed to check existing auth:', err);
      }
    };

    checkExistingAuth();
  }, []);

  const authenticate = useCallback(async (accessToken?: string): Promise<AuthResult> => {
    setLoading(true);
    setError(null);

    try {
      if (accessToken) {
        // Store token and authenticate
        await AsyncStorage.setItem('spotify_token', accessToken);
        
        // TODO: Get user data from Spotify API
        // For now, simulate successful authentication
        const userData: SpotifyUser = {
          id: 'demo_user',
          display_name: 'Demo User',
          email: 'demo@example.com',
          country: 'US',
          followers: { total: 0 },
          images: [],
        };
        
        setUser(userData);
        setIsAuthenticated(true);
        
        return { success: true, accessToken };
      } else {
        // Generate auth URL for manual authentication
        // TODO: Implement actual Spotify OAuth URL generation
        const authURL = 'https://accounts.spotify.com/authorize'; // Placeholder
        return { success: false, error: 'Manual auth required' };
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
      setError(errorMessage);
      setIsAuthenticated(false);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async (): Promise<void> => {
    try {
      await AsyncStorage.multiRemove(['spotify_token', 'spotify_user_id']);
      setIsAuthenticated(false);
      setUser(null);
      setError(null);
    } catch (err) {
      console.error('Failed to logout:', err);
    }
  }, []);

  return {
    isAuthenticated,
    user,
    loading,
    error,
    authenticate,
    logout,
  };
};