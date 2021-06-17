import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {style} from './ButtonsStyle.js';

export default function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={style.button}>
        <Text style={style.buttonTitle}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
