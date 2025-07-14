// Core Spotify Types
export interface SpotifyUser {
  id: string;
  display_name: string;
  email: string;
  country: string;
  followers: {
    total: number;
  };
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
}

export interface SpotifyTrack {
  id: string;
  name: string;
  artists: Array<{
    id: string;
    name: string;
  }>;
  album: {
    id: string;
    name: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
  };
  uri: string;
  duration_ms: number;
  preview_url: string | null;
}

export interface SpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  public: boolean;
  collaborative: boolean;
  followers: {
    total: number;
  };
  tracks: {
    total: number;
  };
  external_urls: {
    spotify: string;
  };
}

// App-specific Types
export interface PresetPlaylist {
  id: string;
  name: string;
  description: string;
  emoji: string;
  tracks: string[];
}

export interface TrackSearchResult {
  found: boolean;
  name?: string;
  artist?: string;
  uri?: string;
  id?: string;
  query: string;
  error?: string;
}

export interface PlaylistCreationResult {
  playlist: SpotifyPlaylist;
  trackResults: TrackSearchResult[];
  foundCount: number;
  totalCount: number;
}

// Authentication Types
export interface AuthConfig {
  clientId: string;
  redirectUrl: string;
  scopes: string;
  issuer: string;
}

export interface AuthResult {
  success: boolean;
  accessToken?: string;
  refreshToken?: string;
  error?: string;
}

// Navigation Types
export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  PlaylistCreated: {
    playlist: SpotifyPlaylist;
    trackResults: TrackSearchResult[];
  };
};

// Component Props Types
export interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  style?: any;
}

export interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  style?: any;
}

// API Response Types
export interface SpotifyApiResponse<T> {
  data?: T;
  error?: {
    status: number;
    message: string;
  };
}

export interface SpotifySearchResponse {
  tracks: {
    items: SpotifyTrack[];
    total: number;
    limit: number;
    offset: number;
  };
}

// Hook Return Types
export interface UseSpotifyAuthReturn {
  isAuthenticated: boolean;
  user: SpotifyUser | null;
  loading: boolean;
  error: string | null;
  authenticate: (accessToken?: string) => Promise<AuthResult>;
  logout: () => Promise<void>;
}

export interface UsePlaylistCreatorReturn {
  loading: boolean;
  error: string | null;
  lastResult: PlaylistCreationResult | null;
  createPlaylist: (
    name: string,
    description: string,
    tracks: string[]
  ) => Promise<{ success: boolean; error?: string } & PlaylistCreationResult>;
  reset: () => void;
}

// Storage Types
export interface StorageKeys {
  SPOTIFY_TOKEN: 'spotify_token';
  SPOTIFY_USER_ID: 'spotify_user_id';
  SPOTIFY_REFRESH_TOKEN: 'spotify_refresh_token';
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    error: string;
    success: string;
    border: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  borderRadius: {
    sm: number;
    md: number;
    lg: number;
  };
  typography: {
    heading1: {
      fontSize: number;
      fontWeight: string;
    };
    heading2: {
      fontSize: number;
      fontWeight: string;
    };
    body: {
      fontSize: number;
      fontWeight: string;
    };
    caption: {
      fontSize: number;
      fontWeight: string;
    };
  };
}