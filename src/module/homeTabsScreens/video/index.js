import React from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {style} from './style.js';
import VideoCard from '../../../commonComponents/videoCard';
import image from '../../../assets/images/MaskGroup3).png';
export default function TabVideo({navigation}) {
  return (
    <>
      <ScrollView style={style.container}>
        <View>
          <Text style={style.title}>See</Text>
          <View style={style.hrLine} />
        </View>
        <VideoCard />

        <VideoCard image={image} />
      </ScrollView>
      <TouchableOpacity>
        <Image
          style={style.postImage}
          source={require('../../../assets/icons/Post.png')}
        />
      </TouchableOpacity>
    </>
  );
}
