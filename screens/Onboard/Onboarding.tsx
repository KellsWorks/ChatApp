import React from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import {AntDesign} from '@expo/vector-icons';

import Onboarding from 'react-native-onboarding-swiper';

import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {

    const navigation = useNavigation()

    const Done = ({...props}) => (
        <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
            <Text style={{ fontFamily: 'Font-medium', color: 'white' }}>Done</Text>
        </TouchableOpacity>
    );

    const Skip = () => (
        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.navigate("Login") }>
            <Text style={{ fontFamily: 'Font-medium', color: 'white' }}>Skip</Text>
        </TouchableOpacity>
    );

    return(
        <Onboarding
        SkipButtonComponent={Skip}
        nextLabel={<AntDesign name="right" size={25}/>}
        DoneButtonComponent={Done}
        onDone={() => navigation.navigate("Login") }
        pages={[
            {
            backgroundColor: '#03a491',
            image: <Image source={require('../../assets/GroupChat.png')} style={{ height: 250, width: 380}}/>,
            title: 'Connect with celebrities',
            subtitle: 'Interact with Malawian celebrities',
            titleStyles: {fontFamily: 'Font-bold', fontSize: 25},
            subTitleStyles: {fontFamily: 'Font-medium', fontSize: 17},
            },
            {
                backgroundColor: '#e8505b',
                image: <Image source={require('../../assets/ChatHappy.png')} style={{ height: 400, width: 380}}/>,
                title: 'Connect with celebrities',
                subtitle: 'Interact with Malawian celebrities',
                titleStyles: {fontFamily: 'Font-bold', fontSize: 25},
                subTitleStyles: {fontFamily: 'Font-medium', fontSize: 17},
                },
            {
            backgroundColor: '#00a7ff',
            image: <Image source={require('../../assets/GroupChat.png')} style={{ height: 250, width: 380}}/>,
            title: 'Connect with celebrities',
            subtitle: 'Interact with Malawian celebrities',
            titleStyles: {fontFamily: 'Font-bold', fontSize: 25},
            subTitleStyles: {fontFamily: 'Font-medium', fontSize: 17},
            },
  ]}
/>
    )
}

export default OnboardingScreen;