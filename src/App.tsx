import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import HomeScreen from '@screens/HomeScreen';
import AuthScreen from '@screens/AuthScreen';
import PlaylistCreatedScreen from '@screens/PlaylistCreatedScreen';
import { RootStackParamList } from '@types/index';
import { theme } from '@styles/theme';

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.background,
                shadowColor: 'transparent',
                elevation: 0,
              },
              headerTintColor: theme.colors.primary,
              headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 18,
              },
              headerBackTitleVisible: false,
              cardStyle: {
                backgroundColor: theme.colors.background,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                title: 'Swaddle',
                headerLargeTitle: true,
              }}
            />
            <Stack.Screen
              name="Auth"
              component={AuthScreen}
              options={{
                title: 'Sign In',
                presentation: 'modal',
              }}
            />
            <Stack.Screen
              name="PlaylistCreated"
              component={PlaylistCreatedScreen}
              options={{
                title: 'Success!',
                headerLeft: () => null,
                gestureEnabled: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;