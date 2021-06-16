import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {style} from './style.js';
export default function Notifications({item}) {
  const bgColor = {
    backgroundColor: item.bgColor,
  };
  const color = {
    color: item.textColor || '#fff',
  };
  return (
    <View style={[style.card, bgColor]}>
      <TouchableOpacity onPress={item.onPress}>
        <Text style={[style.cardText, color]}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}
