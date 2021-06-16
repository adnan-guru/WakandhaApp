import React from 'react';
import {View, Text, Image} from 'react-native';
import {style} from './style.js';
export default function Notifications({item}) {
  const bgColor = {
    backgroundColor: item.bgColor,
  };
  return (
    <View style={[style.cardView, bgColor]}>
      <View style={style.cardContantView}>
        <View style={style.image}>
          <Image source={item.image} />
        </View>
        <View style={style.cardTitleRow}>
          <Text style={[style.cardSubTitle, style.time]}>{item.time}</Text>

          <Text style={style.cardTitle}>{item.title}</Text>
          <Text style={[style.cardTitle, style.cardSubTitle]}>
            commanted on your post
          </Text>
        </View>
      </View>
    </View>
  );
}
