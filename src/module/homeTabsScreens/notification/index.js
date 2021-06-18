import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import NotificationCard from '../../../commonComponents/notificationCard';
import {style} from './style.js';
export default function Notifications({navigation}) {
  const cardData = [
    {
      image: require('../../../assets/images/Group13(4).png'),
      title: 'Dorice Kombi',
      time: '4 hours ago',
      bgColor: '#121219',
    },
    {
      title: ' Kenneth J Lendoye',
      image: require('../../../assets/images/Group13(5).png'),
      time: '15 minutes ago',
    },
    {
      title: 'Dorice Kombi',
      image: require('../../../assets/images/Group13(4).png'),
      time: '4 hours ago',
      bgColor: '#121219',
    },
    {
      title: ' Kenneth J Lendoye',
      image: require('../../../assets/images/Group13(5).png'),
      time: '15 minutes ago',
    },
    {
      title: 'Dorice Kombi',
      image: require('../../../assets/images/Group13(4).png'),
      time: '4 hours ago',
      bgColor: '#121219',
    },
    {
      title: 'Dorice Kombi',
      image: require('../../../assets/images/Group13(5).png'),
      time: '15 minutes ago',
    },
  ];
  return (
    <View style={style.container}>
      <ScrollView>
        <Text style={style.title}>Notification</Text>
        <View style={style.hrLine} />
        <Text style={style.subTitle}>New</Text>
        {cardData.map(item => {
          return <NotificationCard item={item} />;
        })}
      </ScrollView>
      <TouchableOpacity>
        <Image
          style={style.postImage}
          source={require('../../../assets/icons/Post.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
