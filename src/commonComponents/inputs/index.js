import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {style} from './style.js';
export default function Inputs({item}) {
  return (
    <View style={style.buttonView}>
      <Text style={style.inputTitle}>{item.title}</Text>
      <TextInput
        placeholder={item.placeholder}
        placeholderTextColor="rgba(73, 73, 84, 1)"
        style={style.input}
      />
    </View>
  );
}
