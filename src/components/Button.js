import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS } from '../assets';

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
    marginHorizontal: 35,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  buttonStyle: {
    backgroundColor: COLORS.primary_color ,
    color: COLORS.white,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: COLORS.primary_color,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 50,
  },
  cancelButtonStyle: {
    backgroundColor: COLORS.background_sky,
    color: COLORS.primary_color,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: COLORS.primary_color,
    textAlign: "center",
    fontSize: 18,
    lineHeight: 50,
  },
};

export {Button};