import React from 'react';
import { TouchableOpacity, Image, View, ImageBackground } from 'react-native';
import { PRIMARY_COLOR } from '../values/Color';

const ItemImageView = ({ showRemoveIcon, source, tintColor, onDeleteIconPress }) => {
    const { appImageStyle, deleteIconStyle, viewStyle } = styles;

    return (

        { showRemoveIcon }
            ?
            <View style={viewStyle}>
                <ImageBackground
                    tintColor={tintColor}
                    style={appImageStyle}
                    source={source} >
                    <TouchableOpacity onPress={onDeleteIconPress}>
                        <Image
                            tintColor={tintColor}
                            style={deleteIconStyle}
                            source={require('../../assets/ic_delete.png')}
                        />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            :
            <View style={viewStyle}>
                <Image
                    tintColor={tintColor}
                    style={appImageStyle}
                    source={source} />
            </View>
    );
};

const styles = {
    appImageStyle: {
        width: 80,
        height: 80,
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    deleteIconStyle: {
        width: 25,
        height: 25,
    },
    viewStyle: {
        marginRight: 10,
    }
};

export { ItemImageView };