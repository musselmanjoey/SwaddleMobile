# SwaddleMobile - React Native Spotify Playlist Creator

A React Native mobile application for creating Spotify playlists, migrated from the Swaddle Electron desktop app.

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **React Native CLI**: Latest version
- **iOS Development**: Xcode 14.0+, iOS 13.0+
- **Android Development**: Android Studio 2022.1.1+, Android 8.0+ (API 26)
- **Spotify Developer Account**: For API access

### Installation

```bash
# Clone the repository
git clone https://github.com/EOYSoftwareSolutions/SwaddleMobile.git
cd SwaddleMobile

# Install dependencies
npm install

# iOS setup (macOS only)
cd ios && pod install && cd ..

# Android setup
# Make sure Android Studio and SDK are properly configured
```

### Development

```bash
# Start Metro bundler
npm start

# Run on iOS (macOS only)
npm run ios

# Run on Android
npm run android

# Run tests
npm test

# Type checking
npm run type-check

# Linting
npm run lint
npm run lint:fix
```

## 📱 Features

- **Spotify Authentication**: OAuth 2.0 integration with deep linking
- **Preset Playlists**: Curated playlist templates
- **Custom Playlists**: Create playlists from custom track lists
- **Cross-Platform**: iOS and Android support
- **TypeScript**: Full type safety and intellisense
- **Modern Architecture**: React Navigation, AsyncStorage, React Hooks

## 🏗️ Architecture

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx       # Custom button component
│   ├── Input.tsx        # Text input component
│   ├── Header.tsx       # App header component
│   ├── AuthSection.tsx  # Authentication section
│   └── PlaylistSection.tsx # Playlist creation section
├── screens/             # App screens
│   ├── HomeScreen.tsx   # Main app screen
│   ├── AuthScreen.tsx   # Authentication screen
│   └── PlaylistCreatedScreen.tsx # Success screen
├── services/            # API services and business logic
│   └── spotify.ts       # Spotify API integration (TODO)
├── hooks/               # Custom React hooks
│   └── useSpotifyAuth.ts # Authentication hook
├── navigation/          # Navigation configuration
│   └── AppNavigator.tsx # Stack navigation setup
├── utils/               # Helper functions
│   └── deepLinking.ts   # Deep linking utilities (TODO)
├── types/               # TypeScript type definitions
│   └── index.ts         # Shared types and interfaces
├── styles/              # Design system and themes
│   └── theme.ts         # App theme and common styles
└── App.tsx              # Main app component
```

### Tech Stack

- **React Native**: 0.72.6 with TypeScript
- **Navigation**: React Navigation 6.x
- **State Management**: React Context API + Hooks
- **Storage**: AsyncStorage for persistent data
- **Authentication**: react-native-app-auth for OAuth
- **HTTP Client**: Axios for API requests
- **Testing**: Jest + React Native Testing Library
- **Code Quality**: ESLint + Prettier + TypeScript

## 🔧 Development Status

### ✅ Completed (Week 1)
- [x] Project initialization and setup
- [x] Folder structure and architecture
- [x] TypeScript configuration
- [x] Core navigation setup
- [x] Basic component structure
- [x] Theme and styling system
- [x] Testing framework setup
- [x] Development tooling (ESLint, Prettier)

### 🚧 In Progress (Week 2)
- [ ] Spotify service migration from Electron app
- [ ] OAuth authentication implementation
- [ ] Deep linking configuration
- [ ] Preset playlist data integration
- [ ] Component functionality implementation

### 📋 Planned (Week 3-8)
- [ ] Complete component conversion from Electron app
- [ ] Playlist creation workflow
- [ ] Track search and management
- [ ] Error handling and user feedback
- [ ] Performance optimization
- [ ] Platform-specific testing
- [ ] App store preparation

## 🔐 Environment Setup

### Spotify API Configuration

1. Create a Spotify app at [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Configure redirect URIs:
   - iOS: `swaddlemobile://auth`
   - Android: `swaddlemobile://auth`
3. Create `.env` file:

```bash
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_REDIRECT_URL=swaddlemobile://auth
```

### Deep Linking Setup

#### iOS Configuration
Add to `ios/SwaddleMobile/Info.plist`:
```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLName</key>
    <string>swaddlemobile.auth</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>swaddlemobile</string>
    </array>
  </dict>
</array>
```

#### Android Configuration
Add to `android/app/src/main/AndroidManifest.xml`:
```xml
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />
  <data android:scheme="swaddlemobile" />
</intent-filter>
```

## 🧪 Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

### Testing Strategy

- **Unit Tests**: Component logic and utility functions
- **Integration Tests**: Navigation flows and API integration
- **E2E Tests**: Complete user workflows (planned)

## 📦 Building and Deployment

### Development Builds

```bash
# iOS development build
npm run ios

# Android development build
npm run android
```

### Production Builds

```bash
# Android production build
npm run build:android

# iOS production build (requires Xcode)
npm run build:ios
```

## 🔄 Migration from Electron App

This app is migrated from the Swaddle Electron desktop application. Key migration aspects:

### Code Reusability
- **95% reusable**: Services layer (Spotify API integration)
- **90% reusable**: Custom hooks and business logic
- **75% reusable**: Component logic and state management
- **0% reusable**: Styling (CSS → StyleSheet conversion)

### Architecture Changes
- **Authentication**: Electron popup windows → React Native deep linking
- **Navigation**: Single window → Stack navigation
- **Storage**: localStorage → AsyncStorage
- **Styling**: CSS files → StyleSheet API

## 🤝 Contributing

### Development Workflow

1. Create feature branch: `git checkout -b feature/feature-name`
2. Make changes and test thoroughly
3. Run linting: `npm run lint:fix`
4. Run type checking: `npm run type-check`
5. Run tests: `npm test`
6. Commit with conventional format: `dev: feat - description`
7. Push and create pull request

### Code Standards

- **TypeScript**: All new code must be TypeScript
- **ESLint**: Follow configured linting rules
- **Prettier**: Auto-format code on save
- **Testing**: Add tests for new functionality
- **Documentation**: Update docs for significant changes

## 📞 Support

- **Development Team**: Available for technical questions
- **Planning Department**: Project coordination and requirements
- **Repository Issues**: Bug reports and feature requests

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by EOY Software Solutions**  
*Bringing Spotify playlist creation to mobile devices*
=======
# SwaddleMobile
React Native mobile application - Spotify playlist creator migrated from Swaddle desktop app
