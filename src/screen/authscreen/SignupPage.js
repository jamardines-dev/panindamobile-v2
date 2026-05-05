    import React, { Component } from 'react';
    import {
    Text,
    View,
    SafeAreaView,
    TextInput,
    Alert,
    TouchableOpacity,
    StyleSheet,
    Image,
    } from 'react-native';
    import { Ionicons } from '@expo/vector-icons';

    export default class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
        showConfirmPassword: false,
        };
    }

    handleSignUp = () => {
        const { username, password, confirmPassword } = this.state;

        if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
        Alert.alert('Error', 'Please fill all fields');
        return;
        }

        if (password !== confirmPassword) {
        Alert.alert('Error', 'Passwords do not match');
        return;
        }

        Alert.alert('Success', `Welcome, ${username}!`);
    };

    render() {
        const {
        username,
        password,
        confirmPassword,
        showPassword,
        showConfirmPassword,
        } = this.state;

        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
            <Image
                source={require('../../assets/images/logo_paninda.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={22} color="#888" />
                <TextInput
                placeholder="Username"
                style={styles.input}
                autoCapitalize="none"
                value={username}
                onChangeText={(text) => this.setState({ username: text })}
                />
            </View>

            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={22} color="#888" />
                <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                value={password}
                onChangeText={(text) => this.setState({ password: text })}
                />
                <TouchableOpacity
                onPress={() =>
                    this.setState({ showPassword: !showPassword })
                }
                >
                <Ionicons
                    name={showPassword ? 'eye-off' : 'eye'}
                    size={22}
                    color="#888"
                />
                </TouchableOpacity>
            </View>

            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={22} color="#888" />
                <TextInput
                placeholder="Confirm Password"
                style={styles.input}
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
                value={confirmPassword}
                onChangeText={(text) =>
                    this.setState({ confirmPassword: text })
                }
                />
                <TouchableOpacity
                onPress={() =>
                    this.setState({
                    showConfirmPassword: !showConfirmPassword,
                    })
                }
                >
                <Ionicons
                    name={showConfirmPassword ? 'eye-off' : 'eye'}
                    size={22}
                    color="#888"
                />
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={this.handleSignUp}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.footer}>
            <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text
                style={styles.link}
                onPress={() => this.props.navigation.navigate('LoginPage')
                }
                >
                Login
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
        justifyContent: 'space-between',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    footer: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30,
    },
    inputWrapper: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 15,
        height: 50,
    },
    input: {
        flex: 1,
        marginLeft: 10,
    },
    button: {
        width: '90%',
        backgroundColor: '#FEAC00',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    footerText: {
        fontSize: 14,
        color: 'black',
    },
    link: {
        color: '#FEAC00',
        fontStyle: 'italic',
    },
    });
