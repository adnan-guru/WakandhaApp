import React from 'react';
import {View, Image, Text} from 'react-native';
import {style} from './ChatDetailCardStyle.js';

export default function ChatDetailCard(props) {
  return (
    <View>
      {props.isLeft ? (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{height: 108}}>
          <Image
            style={style.image1}
            source={require('../../assets/images/Vector2.png')}
          />

          <Image
            style={style.image2}
            source={require('../../assets/images/Vector3(1).png')}
          />
          <Text style={style.title}>{props.title}</Text>
          <Text style={style.time}>{props.time}</Text>
          <Image
            style={style.image3}
            source={require('../../assets/images/Ellipse25(1).png')}
          />
          <Text style={style.subTitle}>{props.subTitle}</Text>
        </View>
      ) : (
        // eslint-disable-next-line react-native/no-inline-styles
        <View style={{height: 115}}>
          <Image
            style={style.rightImage1}
            source={require('../../assets/images/Vector4.png')}
          />
          <Image
            style={style.rightImage2}
            source={require('../../assets/images/Vector5(2).png')}
          />

          <Text style={style.title2}>{props.title}</Text>
          <Text style={style.time2}>{props.time}</Text>
          <Image
            style={style.rightImage3}
            source={require('../../assets/images/Ellipse25(2).png')}
          />
          <Text style={style.subTitle2}>{props.subTitle}</Text>
        </View>
      )}
    </View>
  );
}
