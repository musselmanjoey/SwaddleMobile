import React, { useState } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from '@components/Header';
import AuthSection from '@components/AuthSection';
import PlaylistSection from '@components/PlaylistSection';
import { useSpotifyAuth } from '@hooks/useSpotifyAuth';
import { RootStackParamList } from '@types/index';
import { theme } from '@styles/theme';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedPreset, setSelectedPreset] = useState('haunted');
  const auth = useSpotifyAuth();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.background}
      />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        
        <AuthSection 
          auth={auth}
          navigation={navigation}
        />
        
        <PlaylistSection
          auth={auth}
          selectedPreset={selectedPreset}
          onPresetChange={setSelectedPreset}
          navigation={navigation}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
});

export default HomeScreen;