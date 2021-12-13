import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../assets';

const RtlTextView = ({ label, value, onChangeText }) => {
    const { inputViewStyle, rtlLabelStyle } = styles;

    return (
        <View style={inputViewStyle}>
            <Text style={rtlLabelStyle}>{label}</Text>
        </View>
    );
};

const styles = {
    inputViewStyle: {
        flexDirection: 'column',
        justfyContent: 'center'
    },
     rtlLabelStyle: {
        fontSize: 15,
        color: COLORS.primary_color,
        fontWeight: "bold",
        textAlign: "right"
    },
};

export {RtlTextView};