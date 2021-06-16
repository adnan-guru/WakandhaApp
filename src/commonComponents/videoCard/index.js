import React from 'react';
import {Text, Image, View, ImageBackground} from 'react-native';
import {style} from './style.js';
import image from '../../assets/images/MaskGroup(2).png';

export default function VideoCard(props) {
  return (
    <View style={style.cardHeader}>
      <View style={style.cardView}>
        <Image source={require('../../assets/images/Ellipse4(2).png')} />
        <View style={style.textView}>
          <Text style={style.imageTitle}>Kenneth</Text>
          <Text style={(style.imageTitle, style.text)}>uploaded a video</Text>
        </View>
        <Image
          style={style.cardDotImg}
          source={require('../../assets/icons/More.png')}
        />
      </View>
      <View style={style.videoView}>
        <ImageBackground
          source={props.image ? props.image : image}
          style={style.cardImage}>
          <View style={style.cardTextView}>
            <Text style={style.cardText}>34 Likes</Text>
            <Text style={style.cardText}>34 Likes</Text>
            <View style={style.button}>
              <Text style={style.buttonText}>Donate</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={style.iconsView}>
        <Image
          style={style.icon}
          source={require('../../assets/icons/share(1).png')}
        />
        <Image
          style={style.icon}
          source={require('../../assets/icons/comment.png')}
        />
        <Image
          style={style.icon}
          source={require('../../assets/icons/heartcopy.png')}
        />
        <Image
          style={style.microIcon}
          source={require('../../assets/icons/share(1).png')}
        />
        <Text style={[style.cardText, style.TextColor]}>6 min ago</Text>
      </View>
    </View>
  );
}
