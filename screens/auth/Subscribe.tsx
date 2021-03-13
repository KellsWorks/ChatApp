import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export class Subscribe extends Component {
    render() {

        const navigation = useNavigation();

        return (
            <SafeAreaView style={styles.safeArea}>
            <View>
            <View style={styles.container}>
                <Feather name="arrow-left" size={25} style={{ marginLeft: 20}} color="gray" onPress={()=> navigation.goBack()}/>
                <Text style={styles.title}>Subscribe</Text>
            </View>
            </View>
            </SafeAreaView>
        )
    }
}

export default Subscribe

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
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
      forgotButton: {
        marginVertical: 10,
        alignContent: 'center',
        alignItems: 'center',
      },
      navButtonText: {
        fontSize: 18,
        fontFamily: 'Font-medium',
        color: '#969696' ,
      },
})
