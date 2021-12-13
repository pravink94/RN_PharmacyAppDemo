import React from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE, BLACK, BORDER_COLOR } from '../values/Color';

const ChildView = ({ children }) => {
  const { container,scrollView,viewStyle } = styles;

  return (
        <View style={viewStyle}>
          {children}
        </View>
   );
};

const styles = {
  viewStyle: {
    backgroundColor: WHITE,
    marginHorizontal:16,
    justfyContent: 'center',
    flexDirection: 'column',
  },
};

export { ChildView};