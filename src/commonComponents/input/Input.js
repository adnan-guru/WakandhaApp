import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {style} from './InputStyle.js';
export default function Input({item}) {
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
