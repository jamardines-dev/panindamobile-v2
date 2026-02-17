    import React, { Component } from 'react';
    import { Text, View, SafeAreaView, TextInput, Alert, TouchableOpacity, StyleSheet, Image } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';

    export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        showPassword: false,
        };
    }

    handleLogin = () => {
        const { username, password } = this.state;
        const cleanUsername = username.trim().toLowerCase();
        const cleanPassword = password.trim().toLowerCase();

        if (cleanUsername === 'admin' && cleanPassword === 'admin') {
        Alert.alert('Login Successful', `Welcome, ${username.trim()}!`);
        } else {
        Alert.alert('Login Failed', 'Invalid username or password');
        }
    };

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContainer}>
            <Image
                source={require('../../assets/images/logo_paninda.png')}
                style={styles.logo}
            />


            <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={22} color="#888" style={styles.inputIcon} />
                <TextInput
                placeholder="Username"
                style={styles.inputWithIcon}
                value={this.state.username}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({ username: text })}
                />
            </View>


            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={22} color="#888" style={styles.inputIcon} />
                <TextInput
                placeholder="Password"
                style={styles.inputWithIcon}
                secureTextEntry={!this.state.showPassword}
                value={this.state.password}
                autoCapitalize="none"
                onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => this.setState({ showPassword: !this.state.showPassword })}
                >
                <Ionicons
                    name={this.state.showPassword ? 'eye-off' : 'eye'}
                    size={22}
                    color="#888"
                />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.forgotPassword}
                onPress={() => Alert.alert('Forgot Password', 'todo')}
            >
                <Text style={{ color: 'black', textAlign: 'right' }}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={this.handleLogin}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                Login
                </Text>
            </TouchableOpacity>
            </View>


            <View style={styles.bottomContainer}>
            <Text style={styles.paragraph}>
                Don't have an account?{' '}
                <Text
                style={{ color: '#FEAC00', fontSize: 14, fontStyle: 'italic' }}
                onPress={() => Alert.alert('Sign Up', 'todo')}
                >
                Sign Up
                </Text>
            </Text>
            </View>
        </SafeAreaView>
        );
    }
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',     
        paddingHorizontal: 20,
    },
    bottomContainer: {
        alignItems: 'center',     
        paddingBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
    },
    inputWrapper: {
        width: 300,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        marginBottom: 15,
        paddingHorizontal: 10,
        height: 50,
    },
    inputWithIcon: {
        flex: 1,
        height: '100%',
        paddingLeft: 10,
    },
    inputIcon: {
        marginLeft: 0,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
    },
    forgotPassword: {
        marginBottom: 14,
        alignSelf: 'flex-end',
        width: 300,
    },
    button: {
        width: 300,
        backgroundColor: '#FEAC00',
        padding: 14,
        borderRadius: 5,
        alignItems: 'center',
        height: 50,
    },
    paragraph: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    });
