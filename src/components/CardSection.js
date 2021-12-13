import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../assets';

const CardSection = (props) => {
    return (
        <View style= { styles.containerStyle } >
        { props.children }
        </View>
  );

};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: COLORS.background_sky,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor:COLORS.border,
    position: 'relative'
  }
};

export {CardSection};