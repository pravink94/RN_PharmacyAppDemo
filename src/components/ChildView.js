import React from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { COLORS } from '../assets';

const ChildView = ({ children }) => {
  const { viewStyle } = styles;

  return (
        <View style={viewStyle}>
          {children}
        </View>
   );
};

const styles = {
  viewStyle: {
    backgroundColor: COLORS.background_sky,
    marginHorizontal:16,
    justfyContent: 'center',
    flexDirection: 'column',
  },
};

export { ChildView};