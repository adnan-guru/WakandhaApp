import React from 'react';
import {
  ScrollView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from 'react-native';
import {style} from './style.js';
import image from '../../assets/images/MaskGroup.png';
export default function UserProfile({navigation}) {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <ScrollView>
        <View>
          <Image
            style={style.headerImage}
            source={require('../../assets/images/headerImage.png')}
          />
          <Image
            style={style.headerProfile}
            source={require('../../assets/images/Ellipse1(3).png')}
          />
          <Image
            style={style.headerCam1}
            source={require('../../assets/images/Group48.png')}
          />
          <Image
            style={style.headerCam2}
            source={require('../../assets/images/Group48.png')}
          />
          <Text style={style.profileTitle}>Joshwell Valdez</Text>
          <Text style={[style.profileTitle, style.profileSubTitle]}>
            Life short Dream Big
          </Text>
          <View style={[style.row, {marginBottom: 16}]}>
            <View style={style.button}>
              <TouchableOpacity>
                <Text style={style.buttonTitle}>+ Add Story</Text>
              </TouchableOpacity>
            </View>
            <View style={style.Subbutton}>
              <TouchableOpacity>
                <Image source={require('../../assets/images/Group50.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={style.row}>
              <Image
                style={style.jobIcon}
                source={require('../../assets/images/job.png')}
              />
              <Text style={style.jobTitle}>Founder and CEO at </Text>
              <Text style={[style.jobTitle, style.jobSubTitle]}>
                Izzy Health{' '}
              </Text>
            </View>
            <View style={style.row}>
              <Image
                style={style.jobIcon}
                source={require('../../assets/images/job.png')}
              />
              <Text style={style.jobTitle}>Former Produc Manager at </Text>
              <Text style={[style.jobTitle, style.jobSubTitle]}>
                Izzy Health{' '}
              </Text>
            </View>
            <View style={style.row}>
              <Image
                style={style.studyIcon}
                source={require('../../assets/images/study.png')}
              />
              <View>
                <Text style={style.jobTitle}>
                  Studied Computer science and Engineering at
                </Text>
                <Text style={[style.jobTitle, style.studySubTitle]}>
                  Stanford University{' '}
                </Text>
              </View>
            </View>
          </View>
          <Text style={style.post}>Post</Text>
          <View style={style.row}>
            <Image
              style={style.postIcon}
              source={require('../../assets/images/Ellipse2.png')}
            />
            <TextInput
              style={style.postInput}
              placeholder="Whats on your mind "
              placeholderTextColor="#595959"
            />
          </View>
          <View style={style.hrLine} />
          <View style={style.postRow}>
            <View style={style.row}>
              <Image
                style={style.postImage}
                source={require('../../assets/images/Ellipse2.png')}
              />
              <Text style={[style.post, style.postText]}>Joshwell veldez</Text>
            </View>
            <Image
              style={style.postDotImage}
              source={require('../../assets/images/More(3).png')}
            />
          </View>
          <View style={{marginHorizontal: 15}}>
            <ImageBackground style={style.bgImage} source={image}>
              <Text style={style.likes}>34 Likes</Text>
              <Text style={[style.likes, style.commits]}>2 Comments</Text>
              <Image
                style={style.heartImage}
                source={require('../../assets/images/heart.png')}
              />
            </ImageBackground>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
