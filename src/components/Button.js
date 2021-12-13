import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { PRIMARY_COLOR, SECONDARY_COLOR_PRIME, SECONDARY_COLOR, WHITE } from '../values/Color';

const Button = ({ onPress, label, type }) => {
  const { buttonViewStyle, buttonStyle, cancelButtonStyle } = styles;

  return (
    type === "positive" 
    ? 
    <View style={buttonViewStyle}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={buttonStyle}>{label}
        </Text>
      </TouchableOpacity>
    </View>
    :
      <View style={buttonViewStyle}>
        <TouchableOpacity onPress={onPress} style={cancelButtonStyle}>
          <Text style={cancelButtonStyle}>{label}
          </Text>
        </TouchableOpacity>
      </View>

  );
};

const styles = {

  buttonViewStyle: {
    marginBottom: 20,
    marginHorizontal: 35,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: PRIMARY_COLOR ,
    color: WHITE,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 50,
  },
  cancelButtonStyle: {
    backgroundColor: WHITE,
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 50,
  },
};

export {Button};