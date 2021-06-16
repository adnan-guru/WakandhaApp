import React from 'react';
import {Text, ScrollView, Image, View, ImageBackground} from 'react-native';
import {style} from './style.js';
import image from '../../assets/images/UserStory.png';
export default function HomePage({item}) {
  return (
    <View style={{marginLeft: 7}}>
      <View style={style.card}>
        <ImageBackground
          source={item.image ? item.image : image}
          style={style.cardImage}>
          <Image
            style={style.profleImage}
            source={require('../../assets/images/Ellipse4(1).png')}
          />
          <Text style={style.cardText}>{item.title}</Text>
        </ImageBackground>
      </View>
    </View>
  );
}
