    import { Ionicons } from '@expo/vector-icons';
    import React from 'react';
    import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

    export default function Navbar() {
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}><
                Ionicons name='home-outline' size={24}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><
                Ionicons name='pricetag-outline' size={24}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><
                Ionicons name='person-outline' size={24}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><
                Ionicons name='cube-outline' size={24}></Ionicons>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><
                Ionicons name='stats-chart-outline' size={24}></Ionicons>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'transparent', // makes background around the rectangle clear
        paddingBottom: 20,
        alignItems: 'center', // centers the rectangle horizontally
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',          // rectangle width (less than screen)
        maxWidth: 400,         // optional limit on large screens
        height: 60,
        paddingHorizontal: 20, // space inside the rectangle
        backgroundColor: '#fff',
        borderRadius: 15,      // rounded corners
        borderWidth: 1,
        borderColor: '#ccc',
        shadowColor: '#000',   // optional shadow
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,          // Android shadow
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    });
