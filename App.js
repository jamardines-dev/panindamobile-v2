import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import SignUpPage from './src/screen/authscreen/SignupPage'; // path to your SignUpPage
import LoginPage from './src/screen/authscreen/LoginPage';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignUpPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
