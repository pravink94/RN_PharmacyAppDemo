import React from 'react';
import {  View } from 'react-native';

const BlankView = () => {
    const { viewStyle } = styles;

    return (
        <View style={viewStyle}>
            
        </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor:'#00000000',
        marginBottom: 20,
        marginHorizontal: 35,
    },
};

export { BlankView};