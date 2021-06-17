import React from 'react';
import {ScrollView, View, StatusBar, Text, Image} from 'react-native';
import MenuCard from '../../../../commonComponents/menuCard';
import {style} from './style.js';
export default function Notifications({navigation}) {
  const Pages = () => {
    return navigation.navigate('Page');
  };
  function Groups() {
    return navigation.navigate('Group');
  }

  const cardData = [
    {
      text: 'Pages',
      bgColor: 'rgba(221, 185, 55, 1)',
      textColor: '#09090F',
      onPress: Pages,
    },
    {text: 'Video', bgColor: '#9437DD'},
    {text: 'Music', bgColor: '#2854F0'},
    {text: 'Gruop', bgColor: '#DD3791', onPress: Groups},
    {text: 'Live', bgColor: '#5BC927'},
    {text: 'Money', bgColor: '#DD4137'},
  ];

  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Text style={style.title}>Menu</Text>
      <View style={style.hrLine} />
      <View style={style.mainView}>
        <View style={style.profileView}>
          <Image source={require('../../../../assets/images/Ellipse3.png')} />
          <View>
            <Text style={style.profileTitle}>Joshwell Valdaz</Text>
            <Text style={style.profileSubTitle}>See your profile</Text>
          </View>
        </View>
        <View style={style.groupsCardView}>
          <Image
            style={style.icon}
            source={require('../../../../assets/icons/Vector(6).png')}
          />
          <View style={style.groupCardTextView}>
            <Text style={style.groupCardText}>Groups</Text>
            <Text style={[style.groupCardText, style.groupSubCardText]}>
              Suggest for you
            </Text>
          </View>
          <Text style={[style.profileTitle, style.ielts]}>
            IELTS Prepration Tips and Lesson
          </Text>
          <Text style={[style.groupCardText, style.top]}>
            This group is share tips and trick...
          </Text>
          <View style={[style.groupCardTextView, style.padding]}>
            <Text style={style.groupCardText}>Groups</Text>
            <Text style={[style.groupCardText, style.groupSubCardText]}>
              Suggest for you
            </Text>
          </View>
        </View>
        <View style={style.cardView}>
          {cardData.map(item => {
            return <MenuCard item={item} />;
          })}
        </View>
      </View>
      <View style={style.hrLine} />
      <View style={style.bottomTextView}>
        <Text style={[style.profileTitle, style.left]}>Purchase History </Text>
        <View style={style.hrLine} />
        <Text style={[style.profileTitle, style.left]}>Culture page </Text>
        <View style={style.hrLine} />
        <Text style={[style.profileTitle, style.left]}>Help page </Text>
        <View style={style.hrLine} />
        <Text style={[style.profileTitle, style.left]}>Language</Text>
        <View style={style.hrLine} />
        <Text style={[style.profileTitle, style.left]}>Settings </Text>
        <View style={style.hrLine} />
        <Text style={[style.profileTitle, style.left]}>Logout </Text>
      </View>
      <Image
        style={style.postImage}
        source={require('../../../../assets/icons/Post.png')}
      />
    </ScrollView>
  );
}
