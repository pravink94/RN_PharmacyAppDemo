import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { COLORS } from '../assets';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputViewStyle, labelStyle, inputStyle } = styles;

    return (
        <View style={inputViewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {

    inputViewStyle: {
        flexDirection: 'column',
        justfyContent: 'center'
    },
    labelStyle: {
        fontSize: 17,
        fontWeight: "bold",
    },
    inputStyle: {
        color: COLORS.black,
        borderWidth: 1,
        borderColor: COLORS.primary_color,
        fontSize: 18,
        lineHeight: 20,
    },
};

export {Input};