    import React, { Component } from 'react';
    import { Text, View, SafeAreaView, TextInput, Alert, TouchableOpacity, StyleSheet, Image} from 'react-native';
    import { Ionicons } from '@expo/vector-icons';
import LoginPage from './LoginPage';


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
        const cleanUsername = username.trim();
        const cleanPassword = password.trim();
        const cleanConfirm = confirmPassword.trim();

        if (!cleanUsername || !cleanPassword || !cleanConfirm) {
        Alert.alert('Error', 'Please fill all fields');
        return;
        }

        if (cleanPassword !== cleanConfirm) {
        Alert.alert('Error', 'Passwords do not match');
        return;
        }

        Alert.alert('Sign Up Successful', `Welcome, ${cleanUsername}!`);
    };

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.centerContainer}>
            <Image 
                source={require('../../assets/images/logo_paninda.png')}
                style={styles.logo} />


            <View style={styles.inputWrapper}>
                <Ionicons name="person-outline" size={22} color="#888" style={styles.inputIcon} />
                <TextInput
                placeholder="Username"
                style={styles.inputWithIcon}
                autoCapitalize="none"
                value={this.state.username}
                onChangeText={(text) => this.setState({ username: text })}
                />
            </View>


            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={22} color="#888" style={styles.inputIcon} />
                <TextInput
                placeholder="Password"
                style={styles.inputWithIcon}
                secureTextEntry={!this.state.showPassword}
                autoCapitalize="none"
                value={this.state.password}
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


            <View style={styles.inputWrapper}>
                <Ionicons name="lock-closed-outline" size={22} color="#888" style={styles.inputIcon} />
                <TextInput
                placeholder="Confirm Password"
                style={styles.inputWithIcon}
                secureTextEntry={!this.state.showConfirmPassword}
                autoCapitalize="none"
                value={this.state.confirmPassword}
                onChangeText={(text) => this.setState({ confirmPassword: text })}
                />
                <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() =>
                    this.setState({ showConfirmPassword: !this.state.showConfirmPassword })
                }
                >
                <Ionicons
                    name={this.state.showConfirmPassword ? 'eye-off' : 'eye'}
                    size={22}
                    color="#888"
                />
                </TouchableOpacity>
            </View>


            <TouchableOpacity
                style={styles.button}
                onPress={this.handleSignUp}
            >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                Sign Up
                </Text>
            </TouchableOpacity>
            </View>

            <View style={styles.bottomContainer}>
            <Text style={styles.paragraph}>
                Already have an account?{' '}
                <Text
                style={{ color: '#FEAC00', fontSize: 14, fontStyle: 'italic' }}
                onPress={() => Alert.alert('Login', value={LoginPage})}
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
        marginBottom: 20,
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
