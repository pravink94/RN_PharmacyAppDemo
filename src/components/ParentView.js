import React from 'react';
import { View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { COLORS } from '../assets';

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
    backgroundColor: COLORS.white,
    paddingVertical: 20,
    marginHorizontal:16,
    justfyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: COLORS.white,
  },
};

export {ParentView};