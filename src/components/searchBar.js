import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default class SearchBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Ionicons name="search" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',      
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10,     
    marginBottom: 15,
    shadowColor: '#000',       
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    marginRight: 8,           
  },
  searchInput: {
    flex: 1,                  
    height: '100%',
    color: '#000',
  },
});
