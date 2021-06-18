import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {style} from './style.js';

export default function ProductCard({item}) {
  return (
    <View style={style.card}>
      <TouchableOpacity onPress={item.onPress}>
        <Image
          source={
            item.image
              ? item.image
              : require('../../assets/images/Rectangle13.png')
          }
        />
      </TouchableOpacity>
      <Text style={style.cardText}>$220</Text>
      <Text style={[style.cardText, style.cardSubText]}>
        Black Yellow print geor..
      </Text>
    </View>
  );
}
