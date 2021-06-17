import React from 'react';
import {View, Image, Text} from 'react-native';
import {style} from './ChatDetail1CardStyle.js';
export default function ChatDetail1Card({navigation}) {
  return (
    <>
      <View style={{height: 210}}>
        <View style={style.chatCard}>
          <Text style={style.chatTitle}>Dorice Kombi</Text>
          <Text style={style.chatHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <View style={style.row}>
          <Text style={style.postTime}>24 min</Text>
          <Text style={[style.postTime, style.left]}>Like</Text>
          <Text style={[style.postTime, style.left]}>Reply</Text>
        </View>
        <Image
          style={style.profileImage}
          source={require('../../assets/images/Group13(11).png')}
        />
        <View style={style.likeIconsView}>
          <Image
            style={style.likeIcon}
            source={require('../../assets/images/Like.png')}
          />
          <Image
            style={style.likeIcon}
            source={require('../../assets/images/Icon(1).png')}
          />
          <Text style={style.likeIconsText}>34</Text>
        </View>
      </View>

      <View style={{height: 177}}>
        <View style={[style.chatCard, style.height]}>
          <Text style={style.chatTitle}>Dorice Kombi</Text>
          <Text style={style.chatHeading}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'
          </Text>
        </View>
        <View style={style.row}>
          <Text style={style.postTime}>24 min</Text>
          <Text style={[style.postTime, style.left]}>Like</Text>
          <Text style={[style.postTime, style.left]}>Reply</Text>
        </View>
        <Image
          style={style.card2ProfileImage}
          source={require('../../assets/images/Group13(11).png')}
        />
        <View style={style.likeIconsView2}>
          <Image
            style={style.likeIcon}
            source={require('../../assets/images/Like.png')}
          />
          <Image
            style={style.likeIcon}
            source={require('../../assets/images/Icon(1).png')}
          />
          <Text style={style.likeIconsText}>34</Text>
        </View>
      </View>
      <View style={style.simpleProfileRow}>
        <Image
          style={style.simleProfile}
          source={require('../../assets/images/Group43.png')}
        />
        <Text style={style.simleProfileTitle}>Dorice Kombi</Text>
        <Text style={style.simleProfileHeading}>Lorem ipsum dummy...</Text>
      </View>
      <View style={style.simpleProfileRow}>
        <Image
          style={style.simleProfile}
          source={require('../../assets/images/Group43.png')}
        />
        <Text style={style.simleProfileTitle}>Dorice Kombi</Text>
        <Text style={style.simleProfileHeading}>Lorem ipsum dummy...</Text>
      </View>
    </>
  );
}
