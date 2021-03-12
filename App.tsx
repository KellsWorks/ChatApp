import AppLoading from 'expo-app-loading';

import * as Font from 'expo-font';

import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

const LoadFonts = () =>{
  return Font.loadAsync({
    'Font-normal': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Font-medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Font-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

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
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Font-medium' }}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
    function useCachedResources() {
      throw new Error('Function not implemented.');
    }

