import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function productCard() {
  return (
    <View style={styles.card}>
      <Text>Product Card</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '48%',           // 2 per row
    height: 200,
    marginBottom: 15,       // spacing between rows
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',    
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,          
  },
});
