import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Image,
  Text,
  TextInput,
} from 'react-native';
import {style} from './style.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Card from '../../../../commonComponents/chatDetail1Card/ChatDetail1Card.js';
export default function Friends({navigation}) {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={style.header}>
        <View style={style.row}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={style.backArrow}
              source={require('../../../../assets/images/Vector1(1).png')}
            />
          </TouchableOpacity>

          <Text style={style.headerTitle}>Kenneth</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              style={style.searchIcon}
              source={require('../../../../assets/images/Group40.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
      <View style={style.typeMessageView}>
        <View>
          <Image
            style={style.emoji}
            source={require('../../../../assets/images/emoji.png')}
          />
          <TextInput
            style={style.input}
            placeholderTextColor="#3D3D49"
            placeholder="Type Message"
          />

          <Image
            style={style.line}
            source={require('../../../../assets/images/voice.png')}
          />
          <Image
            style={style.camera}
            source={require('../../../../assets/images/camera.png')}
          />
        </View>
      </View>
    </View>
  );
}
