import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormButton from '../../components/FormButton';
import FormInput from '../../components/FormInput';

const Register = () => {

    const navigation = useNavigation();

    const [email, setEmail] = useState();
    
    const [password, setPassword] = useState();
      
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
            <View style={styles.container}>
                <Feather name="arrow-left" size={25} style={{ marginLeft: 20}} color="gray" onPress={()=> navigation.goBack()}/>
                <Text style={styles.title}>Get started!</Text>
            </View>
            <View style={{ flexDirection: 'column', marginTop: 50, padding: 10 }}>

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 50,}}>
            <Image style={{ marginBottom: 30 }} source={require('../../assets/chat.png')}/>
            </View>
            <FormInput
                placeholderText="Username"
                iconType="user"
                keyboardType="default"
                autoCapitalize="none"
                autoCorrect={false}
            />
             <FormInput
                placeholderText="Phone number"
                iconType="smartphone"
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="mail"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
             <FormInput
                labelValue={password}
                onChangeText={(password) => setEmail(setPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />
             <FormInput
                labelValue={password}
                onChangeText={(password) => setEmail(setPassword)}
                placeholderText="Confirm password"
                iconType="lock"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <FormButton
                buttonTitle="Register"
                onPress={() => navigation.navigate('Subscribe')}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.goBack()}>
                    <Text style={styles.navButtonText}>
                    Already have an account? Log in
                    </Text>
            </TouchableOpacity>
            </View>
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
