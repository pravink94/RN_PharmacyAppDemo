import React from 'react';
import { View } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE, BLACK, BORDER_COLOR } from '../values/Color';

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
    backgroundColor: WHITE,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor:BORDER_COLOR,
    position: 'relative'
  }
};

export {CardSection};