import React from 'react';
import { View, Text } from 'react-native';
import { COLORS } from '../assets';

const Headline = ({ label }) => {
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
        textAlign: 'center',
        fontWeight: "bold",
        color: COLORS.primary_color,
        marginBottom: 20
    },
};

export {Headline};