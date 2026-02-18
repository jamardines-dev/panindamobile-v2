    import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

    export default function Navbar() {
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}><Text>Home</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Text>Search</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Text>Add</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Text>Notif</Text></TouchableOpacity>
            <TouchableOpacity style={styles.navItem}><Text>Profile</Text></TouchableOpacity>
        </View>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff',
        paddingBottom: 10, // 👈 adds bottom space automatically for iPhone/X devices
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    });
