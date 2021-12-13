import React from 'react';
import { View, Text } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE, BLACK, BORDER_COLOR } from '../values/Color';

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
        color: PRIMARY_COLOR,
        marginBottom: 20
    },
};

export {Headline};