import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './style.js';

export default function Login(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.button}>
        <Text style={style.buttonTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
