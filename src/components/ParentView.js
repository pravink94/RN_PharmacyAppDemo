import React from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE, BLACK, BORDER_COLOR } from '../values/Color';

const ParentView = ({ children }) => {
  const { container,scrollView,viewStyle } = styles;

  return (
    <SafeAreaView style={container}>
      <ScrollView 
        style={scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={viewStyle}>
          {children}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: WHITE,
    paddingVertical: 20,
    marginHorizontal:16,
    justfyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: WHITE,
  // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: WHITE,
  },
};

export {ParentView};