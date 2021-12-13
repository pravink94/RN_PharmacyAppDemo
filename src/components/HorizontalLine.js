import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../assets';

const HorizontalLine = () => {
  const { viewStyle } = styles;

  return (
        <View style={viewStyle}>

        </View>
    );
};

const styles = {
  viewStyle: {
    height:1,
    backgroundColor: COLORS.gray,
    },
};

export { HorizontalLine };