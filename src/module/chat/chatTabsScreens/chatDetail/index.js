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
import ChatCard from '../../../../commonComponents/chatDetailCard';
export default function Friends({navigation}) {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={style.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.navigate('ChatTabs')}>
            <Image
              style={style.backArroeIcon}
              source={require('../../../../assets/images/Vector1(1).png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChatDetail1')}>
            <Image
              style={style.image}
              source={require('../../../../assets/images/Group13(4).png')}
            />
          </TouchableOpacity>

          <View>
            <Text style={style.headerTitle}>Kenneth J Lendoye</Text>
            <Text style={style.headerSubTitle}>Active Now</Text>
          </View>
        </View>
        <View style={style.headerIcons}>
          <View style={style.iconView}>
            <Image
              source={require('../../../../assets/images/videoIcon.png')}
            />
          </View>
          <View style={style.iconView}>
            <Image
              style={style.phoneIcon}
              source={require('../../../../assets/images/call1.png')}
            />
          </View>
          <View style={style.iconView}>
            <Image source={require('../../../../assets/images/More(2).png')} />
          </View>
        </View>
      </View>
      <ScrollView>
        <ChatCard
          isLeft
          title="Lendoye"
          subTitle="Accha kore felen, Khto?"
          time="11:16"
        />
        <ChatCard
          title="Dorice Kombi "
          subTitle="New client ashche, design and "
          time="11:17"
        />
        <ChatCard
          isLeft
          title="Lendoye"
          subTitle="Accha kore felen, Khto?"
          time="11:16"
        />
        <ChatCard
          title="Dorice Kombi "
          subTitle="New client ashche, design and "
          time="11:17"
        />
        <ChatCard
          isLeft
          title="Lendoye"
          subTitle="Accha kore felen, Khto?"
          time="11:16"
        />
        <ChatCard
          title="Dorice Kombi "
          subTitle="New client ashche, design and "
          time="11:17"
        />
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
            source={require('../../../../assets/images/line.png')}
          />
          <Image
            style={style.camera}
            source={require('../../../../assets/images/camera.png')}
          />
        </View>
      </View>
      <Image
        style={style.microphone}
        source={require('../../../../assets/images/microphone(1).png')}
      />
    </View>
  );
}
