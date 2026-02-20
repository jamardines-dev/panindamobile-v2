    import React from 'react';
    import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

    const screenWidth = Dimensions.get('window').width;

    export default function ProductSlideShow() {
    return (
        <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{}} // remove paddingHorizontal
        >


        <View style={styles.slideshowcard}>
            <Image
            source={require('../../assets/images/logo_paninda.png')}
            style={styles.logo}
            />
        </View>


        <View style={styles.slideshowcard}>
            <Image
            source={require('../../assets/images/logo_paninda.png')}
            style={styles.logo}
            />
        </View>


        <View style={styles.slideshowcard}>
            <Image
            source={require('../../assets/images/logo_paninda.png')}
            style={styles.logo}
            />
        </View>

        </ScrollView>
    );
    }

    const styles = StyleSheet.create({
    slideshowcard: {
        width: screenWidth,        // full screen width
        height: 200,
        marginRight: 0,            // no extra space between slides
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
    logo: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        resizeMode: 'cover',
    },
    });
