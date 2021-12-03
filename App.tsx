import React from 'react';
import { Text, View, StyleSheet, useColorScheme } from 'react-native';
import {
  useNavigation,
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import { FirstScreen } from './components/FirstScreen';
import { SecondScreen } from './components/SecondScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="screen1" component={FirstScreen} />
          <Stack.Screen name="screen2" component={SecondScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
