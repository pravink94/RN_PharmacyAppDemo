import React from 'react';
import { View, Text } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE, BLACK, BORDER_COLOR } from '../values/Color';

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
        marginTop: 20,
        marginHorizontal: 35,
        flexDirection: 'column',
        justfyContent: 'center'
    },
     rtlLabelStyle: {
        fontSize: 15,
        color: PRIMARY_COLOR,
        fontWeight: "bold",
        textAlign: "right"
    },
};

export {RtlTextView};