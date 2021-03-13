import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, useColorScheme, View } from 'react-native';

import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import OnboardingScreen from './screens/Onboard/Onboarding';

import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import ForgotPassword from './screens/auth/ForgotPassword';
import Main from './screens/Main';
import Subscribe from './screens/auth/Subscribe';



const LoadFonts = () =>{
  return Font.loadAsync({
    'Font-normal': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Font-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Font-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  const AppStack = createStackNavigator();

  const colorScheme = useColorScheme()

  if(!fontLoaded){

    return(
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err: any) => console.error(err)}
      >
      </AppLoading>
    ); 
  }

  return (
    <>
    <StatusBar style="light"/>
    <NavigationContainer >
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Onboarding" component={OnboardingScreen}/>
        <AppStack.Screen name="Login" component={Login}/>
        <AppStack.Screen name="Register" component={Register}/>
        <AppStack.Screen name="ForgotPassword" component={ForgotPassword}/>
        <AppStack.Screen name="Main" component={Main}/>
        <AppStack.Screen name="Subscribe" component={Subscribe}/>
      </AppStack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


