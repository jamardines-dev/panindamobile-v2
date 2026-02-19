import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function ProductSlideShow() {
  return (
    <ScrollView
      horizontal
      pagingEnabled          // snaps to each slide
      showsHorizontalScrollIndicator={false} 
      style={styles.scrollView}
    >
      {/* Slide 1 */}
      <View style={styles.slideshowcard}>
        <Text>Slide 1</Text>
      </View>

      {/* Slide 2 */}
      <View style={styles.slideshowcard}>
        <Text>Slide 2</Text>
      </View>

      {/* Slide 3 */}
      <View style={styles.slideshowcard}>
        <Text>Slide 3</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
  },
  slideshowcard: {
    width: screenWidth - 50,  // full width minus padding
    height: 200,
    marginRight: 15,
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
