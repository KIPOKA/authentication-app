import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import SignScreen from './src/screens/SignScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
     <SignScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#F9FBFC',
  },
});
