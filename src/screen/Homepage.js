import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Navbar from '../components/navbar'; 
import SearchBar from '../components/searchBar';

export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.content}>
        <SearchBar/>
        <Text style={styles.welcomeText}>WELCOME JOSHUA!</Text>

        <View style={styles.cell}>
          <Text>Sample Cell 1</Text>
        </View>
        <View style={styles.cell}>
          <Text>Sample Cell 2</Text>
        </View>
      </View>


      <Navbar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between', // content top, navbar bottom
  },
  content: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FEAC00',
    marginBottom: 15,
  },
  cell: {
    width: '100%',
    height: 80,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    shadowColor: '#000',   //shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,   
  },
});
