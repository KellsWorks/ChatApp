import { StatusBar } from 'expo-status-bar'

import React, { Component } from 'react'

import { Text,ImageBackground, View, SafeAreaView } from 'react-native'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import { BottomTabParamList } from '../types';
import { Ionicons } from '@expo/vector-icons';
import Register from './auth/Register';
import MainTabNavigator from '../components/MainTabNavigator';

const MainTab = createBottomTabNavigator<BottomTabParamList>();

const Main = () => {


        return (
            <>
            <StatusBar style="light"/>
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <ImageBackground source={require('../assets/appbar.png')} style={{ width: '100%', height: 150 }}> 
                   <SafeAreaView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10, paddingTop: 50 }}>
                        <Text style={{marginLeft: 20, fontFamily: 'Font-bold', fontSize: 30, color: 'white' }}>
                            CelebHub
                        </Text>
                        <View style={{ width: 110, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10,  paddingRight: 10}}>
                            <Ionicons name="people"  size={25} color='white'/>
                            <Ionicons name="search"  size={25} color='white'/>
                            <Ionicons name="ellipsis-horizontal-circle"  size={25} color='white'/>
                        </View>
                    </View>
                    <View style={{ bottom: -43, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30}}>
                        
                    </View>
                   </SafeAreaView>
                </ImageBackground>
                <MainTabNavigator/>
            </View>
            </>
        )
}

export default Main;
