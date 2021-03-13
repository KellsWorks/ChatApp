import React from 'react';
import {StyleSheet, Text, Image, View, Alert} from 'react-native';
import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

const ForgotPassword = () => {
    const navigation = useNavigation()
    const showAlert = () => {
        Alert.alert(
            "Reset password",
            "Not implemented yet!",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        )
    }

  return (
    <View style={styles.container}>
        <View style={{ width: '100%', height: 30, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
            <Feather name="arrow-left" size={25} style={{ marginTop: 40}} color="gray" onPress={()=> navigation.goBack()}/>
        </View>
      <View style={styles.container}>
        <Image source={require('../../assets/forgot.png')} style={{ height: 250, width: 250 }}/>
        <Text style={styles.header}>
          Forgot password
        </Text>
        <Text style={styles.text}>
          Enter your phone number below. We will send you an SMS with a pin code
          to confirm your identity.
        </Text>
        <View style={styles.m20}>
          <FormInput
            placeholderText="Enter your phone number"
            iconType="smartphone"
            keyboardType="phone-pad"
          />
        </View>
      </View>
      <FormButton buttonTitle="Send SMS" onPress={ showAlert } />
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginTop: 10, fontFamily: 'Font-bold', fontSize: 25,
  },
  text: {
    fontFamily: 'Font-normal',
            alignSelf: 'center',
            marginTop: 20,
            color: 'gray',
  },
  m20: {
    margin: 20,
  },
});
