import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Navbar from '../components/navbar'; 
import SearchBar from '../components/searchBar';


export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.content}>
        <SearchBar/>
        <View style={styles.cell}>
          <Text>Sample Cell 1</Text>
        </View>
        <View style={styles.productView}>
          <ScrollView>

          </ScrollView>
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

  cell: {
    width: '100%',
    height: 150,
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
    flexDirection: 'row',
  },

  productView: {
    width: '100%',
    height: 200,
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
