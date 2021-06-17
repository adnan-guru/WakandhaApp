import React from 'react';
import {Text, ScrollView, View, StatusBar, Image} from 'react-native';
import {style} from './style.js';
import Card from '../../../../commonComponents/productCard';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ProductPage({navigation}) {
  const onPressHandler = () => {
    navigation.navigate('ProductDetaile');
  };
  const cardData = [
    {
      image: require('../../../../assets/images/Rectangle13.png'),
      onPress: onPressHandler,
    },
    {
      image: require('../../../../assets/images/Rectangle14.png'),
      onPress: onPressHandler,
    },
    {
      image: require('../../../../assets/images/Rectangle15.png'),
      onPress: onPressHandler,
    },
    {
      image: require('../../../../assets/images/Rectangle16.png'),
      onPress: onPressHandler,
    },
    {
      image: require('../../../../assets/images/Rectangle15.png'),
      onPress: onPressHandler,
    },
    {
      image: require('../../../../assets/images/Rectangle16.png'),
      onPress: onPressHandler,
    },
  ];
  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={style.headerTextView}>
        <View style={style.titleView}>
          <Text style={style.title}>Market</Text>
        </View>
        <View style={style.subTitleView}>
          <Text style={style.subTitle}>Short by</Text>
          <Text style={style.subTitle}>Filter </Text>
          <Image
            style={style.icon}
            source={require('../../../../assets/icons/Vector(4).png')}
          />
        </View>
      </View>
      <View style={style.hrLine} />
      <View style={style.card}>
        {cardData.map(item => {
          return <Card item={item} />;
        })}
      </View>
      <TouchableOpacity
        style={style.postImage}
        onPress={() => navigation.navigate('AddProduct')}>
        <Image source={require('../../../../assets/icons/Post.png')} />
      </TouchableOpacity>
    </ScrollView>
  );
}
