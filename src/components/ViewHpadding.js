import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../assets';

const ViewHpadding = ({ children }) => {
  const { viewStyle } = styles;

  return (
        <View style={viewStyle}>
          {children}
        </View>
    );
};

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: COLORS.background_sky,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
};

export { ViewHpadding };