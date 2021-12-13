import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../assets';

const ScreenTitle = ({ label }) => {
    const { headlineTextStyle } = styles;

    return (
        <View>
            <Text style={headlineTextStyle}>{label}</Text>
        </View>
            );
};

const styles = {
    headlineTextStyle: {
        fontSize: 22,
        textAlign: 'left',
        fontWeight: "bold",
        color: COLORS.black,
    },
};

export {ScreenTitle};