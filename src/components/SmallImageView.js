import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { PRIMARY_COLOR } from '../values/Color';

const SmallImageView = ({ source, tintColor, onPress }) => {
    const { appImageStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress}>
            <Image
                tintColor={tintColor}
                style={appImageStyle}
                source={source} />
        </TouchableOpacity>
    );
};

const styles = {
    appImageStyle: {
        width: 70,
        height: 70,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: PRIMARY_COLOR
    },
};

export { SmallImageView };