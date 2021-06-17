import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {style} from './ChatTabCardStyle.js';

export default function ChatTabCard({item}) {
  return (
    <>
      <View style={style.chatCard}>
        <View style={{flexDirection: 'row'}}>
          <Image source={item.image} />
          <View>
            <TouchableOpacity onPress={() => item.onPress}>
              <Text style={style.chatTitle}>{item.title}</Text>
            </TouchableOpacity>

            <Text style={style.chatSubTitle}>{item.subTitle}</Text>
          </View>
        </View>
        <Text style={style.time}>{item.time}</Text>
      </View>
      {item.hrLine === false ? null : <View style={style.CardhrLine} />}
    </>
  );
}
