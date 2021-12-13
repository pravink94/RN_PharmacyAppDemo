import React from 'react';
import { View } from 'react-native';
import { WHITE } from '../values/Color';

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
    backgroundColor: WHITE,
    paddingHorizontal: 20,
    flexDirection: 'column',
  },
};

export { ViewHpadding };