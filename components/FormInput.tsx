import React from 'react';

import { StyleSheet, Dimensions, TextInput, View } from 'react-native';

import {Feather} from '@expo/vector-icons';

const windowHeight = Dimensions.get('window').height;

const windowWidth = Dimensions.get('window').width;

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
        <Feather name={iconType} size={20} color="#666" />
      </View>
            <TextInput
                value={labelValue}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
                style={styles.input}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        margin: 5,
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#ececec',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#CCC',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
       padding: 10,
       flex: 1,
       fontSize: 15,
       fontFamily: 'Font-medium',
       color: '#333',
       justifyContent: 'center',
       alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 1.5,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});
