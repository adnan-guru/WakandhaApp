import React from 'react';
import {ScrollView, StatusBar, View, Image} from 'react-native';
import {style} from './style.js';
import Card from '../../../../commonComponents/chatTabCard/ChatTabCard.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Chat({navigation}) {
  function Next() {
    return navigation.navigate('Page');
  }

  const cardData = [
    {
      image: require('../../../../assets/images/Group13(6).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
      onPress: Next,
    },
    {
      image: require('../../../../assets/images/Group13(7).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
    },
    {
      image: require('../../../../assets/images/Group13(8).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
    },
    {
      image: require('../../../../assets/images/Group13(9).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
    },
    {
      image: require('../../../../assets/images/Group13(10).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
    },
    {
      image: require('../../../../assets/images/Group13(6).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
    },
    {
      image: require('../../../../assets/images/Group13(8).png'),
      title: 'Kenneth J Lendoye',
      subTitle: 'When you will...',
      time: '2:24 PM',
      hrLine: false,
    },
  ];
  return (
    <View style={style.container}>
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={{marginBottom: 71}}>
          {cardData.map(item => {
            return <Card item={item} />;
          })}
        </View>
      </ScrollView>
      <View style={style.addChat}>
        <TouchableOpacity onPress={() => navigation.navigate('ChatDetail')}>
          <Image source={require('../../../../assets/images/image7.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
