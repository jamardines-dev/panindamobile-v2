import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Navbar from '../components/navbar'; // adjust path if needed

export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>
      

      <View style={styles.content}>
        <Text style={styles.welcomeText}>WELCOME JOSHUA!</Text>

        <View style={styles.cell}>
          <Text>Sample Cell 1</Text>
        </View>
        <View style={styles.cell}>
          <Text>Sample Cell 2</Text>
        </View>
      </View>


      <View style={styles.navbarWrapper}>
        <Navbar />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', 
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarWrapper: {
    marginBottom: 0, 
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FEAC00',
    marginBottom: 20,
  },
  cell: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
});
