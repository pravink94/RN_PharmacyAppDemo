import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE, BLACK, BORDER_COLOR } from '../values/Color';

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
        marginBottom: 20,
        flexDirection: 'column',
        justfyContent: 'center'
    },
    labelStyle: {
        fontSize: 17,
        fontWeight: "bold",
    },
    inputStyle: {
        color: BLACK,
        borderWidth: 1,
        borderColor: PRIMARY_COLOR,
        fontSize: 18,
        lineHeight: 20,
    },
};

export {Input};