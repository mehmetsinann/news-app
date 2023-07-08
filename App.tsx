import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
        <StatusBar style="light" />
        <Toast />
      </NavigationContainer>
    </Provider>
    
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
