import React from 'react';
import { View } from 'react-native';
import { GRAY } from '../values/Color';

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
    backgroundColor: GRAY,
    },
};

export { HorizontalLine };