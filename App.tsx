import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';

// News API Key: 44153d692eda497496f8eb010a2de0a6

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
