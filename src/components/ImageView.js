import React from 'react';
import { Image } from 'react-native';

const ImageView = ({ source }) => {
    const { appImageStyle } = styles;

    return (
        <Image
            style={appImageStyle}
            source={source} />
            );
};

const styles = {
    appImageStyle: {
        width: 300,
        height: 300,
        borderRadius: 8,
        alignSelf: 'center'
    },
};

export {ImageView};