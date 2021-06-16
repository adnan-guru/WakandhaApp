import React from 'react';
import {View, Text, Image} from 'react-native';
import {style} from './style.js';

export default function Friends({item}) {
  return (
    <View style={style.cardView}>
      <View style={style.imageRow}>
        <Image source={item.image} />
      </View>
      <View style={style.titleRow}>
        <Text style={style.cardTitle}>Kenneth J Lendoye</Text>
        <View style={style.subTitleRow}>
          <Text style={style.cardSubTitle}>2 mutual friends </Text>
          <Text style={[style.cardSubTitle, style.time]}>10h</Text>
        </View>
        <View style={style.buttonView}>
          <View style={style.button}>
            <Text style={style.buttonText}>Confirm</Text>
          </View>
          <View style={[style.button, style.bgColor]}>
            <Text style={[style.buttonText, style.buttonTextColor]}>
              Delete
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
