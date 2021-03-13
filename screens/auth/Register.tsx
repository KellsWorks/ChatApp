import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Register = () => {

    const navigation = useNavigation();
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
            <View style={styles.container}>
                <Feather name="arrow-left" size={25} style={{ marginLeft: 20}} color="gray" onPress={()=> navigation.goBack()}/>
                <Text style={styles.title}>Get started!</Text>
            </View>
            {/* <View>
                <Text>
                    Fill out all the required fields
                </Text>
            </View> */}
            </View>
        </SafeAreaView>
    )
}

export default Register

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, backgroundColor: 'white',
        flexDirection: 'column',
    },
    container: {
        width: '100%',
        height: 30,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingTop: 40,
        alignContent: 'center'
    },
    title: {
        fontFamily: 'Font-bold',
        fontSize: 30,
        color: 'gray',
        marginLeft: 40,
        marginTop: -10,
    }
})
