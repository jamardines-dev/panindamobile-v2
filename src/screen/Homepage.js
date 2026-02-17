    import React, { Component } from 'react';
    import { Text, View, StyleSheet } from 'react-native';

    export default class Homepage extends Component {
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>WELCOME JOSHUA!</Text>
        </View>
        );
    }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',     
        backgroundColor: '#fff',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FEAC00',
    },
    });
