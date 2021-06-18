import React from 'react';
import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import {style} from './style.js';
import FriendCard from '../../../commonComponents/friendsCard/FriendsCard.js';
export default function Friends({navigation}) {
  const cardData = [
    {image: require('../../../assets/images/Ellipse25.png')},
    {image: require('../../../assets/images/Group13.png')},
    {image: require('../../../assets/images/Group13(1).png')},
    {image: require('../../../assets/images/Group13(2).png')},
    {image: require('../../../assets/images/Group13(3).png')},
  ];
  return (
    <View style={{flex: 1}}>
      <ScrollView style={style.container}>
        <View style={style.headerTextView}>
          <View style={style.titleView}>
            <Text style={style.title}>Friends</Text>
          </View>
          <View style={style.subTitleView}>
            <Text style={style.subTitle}>Suggestion</Text>
            <Text style={style.subTitle}>All Friends </Text>
          </View>
        </View>
        <View style={style.hrLine} />
        {cardData.map(item => {
          return <FriendCard item={item} />;
        })}
      </ScrollView>
      <TouchableOpacity>
        <Image
          style={style.postIcon}
          source={require('../../../assets/icons/Post.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
