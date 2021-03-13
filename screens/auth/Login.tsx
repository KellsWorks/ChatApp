import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar'
import React, { Component, useState } from 'react'

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import FormButton from '../../components/FormButton';

import FormInput from '../../components/FormInput';

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigation = useNavigation();
    
    return (
        <>
          <StatusBar style="light"/>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20,}}>
            <Image style={styles.logo} source={require('../../assets/chat.png')}/>
            <Text style={{ fontFamily: 'Font-bold', color: 'gray', fontSize: 32, margin: 20 }}>CelebHub</Text>

        <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign in"
        onPress={() => navigation.navigate('Main')}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {navigation.navigate('ForgotPassword')}}>
        <Text style={styles.navButtonText}>Forgot password?</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate("Register")}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create one
        </Text>
      </TouchableOpacity>
      
        </View>
        </>
    )
}

export default Login

const styles = StyleSheet.create({
    logo: {
        resizeMode: 'cover',
      },
      forgotButton: {
        marginVertical: 10,
      },
      navButtonText: {
        fontSize: 18,
        fontFamily: 'Font-medium',
        color: '#969696' ,
      },
})
