import React from 'react';
import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Navbar from '../components/navbar'; 
import SearchBar from '../components/searchBar';
import ProductCard from '../components/ui/productCard';
import ProductSlideShow from '../components/ui/productSlideShow';

export default function Homepage() {
  return (
    <SafeAreaView style={styles.container}>


      <View style={styles.topContent}>
        <SearchBar />
        <View>
          <ProductSlideShow />
        </View>
      </View>


      <ScrollView style={styles.productGrid} contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: 20 }} showsVerticalScrollIndicator={false}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>

      <Navbar />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  topContent: {
    padding: 20,
  },

  cell: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    shadowColor: '#000',   
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 10,
  },

  productGrid: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
