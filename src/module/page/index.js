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
import image from '../../assets/images/MaskGroup(1).png';
export default function UserProfile({navigation}) {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <ScrollView>
        <View>
          <Image
            style={style.headerImage}
            source={require('../../assets/images/Rectangle36(2).png')}
          />
          <Image
            style={style.backIcon}
            source={require('../../assets/images/Back(1).png')}
          />
          <Image
            style={style.headerCameraIcon}
            source={require('../../assets/images/Group48.png')}
          />
        </View>
        <View>
          <View style={style.row}>
            <Text style={style.title}>Fashoin World</Text>
            <Image
              style={[style.tickIcon]}
              source={require('../../assets/images/Group59.png')}
            />
          </View>
          <Text style={[style.title, style.subtitle]}>Industrial company</Text>
          <Image
            style={style.colorIcon}
            source={require('../../assets/images/Ellipse36.png')}
          />
        </View>
        <View style={style.row}>
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
        <View style={style.postIconView}>
          <View style={style.postIconsRow}>
            <Image
              style={style.postIcon}
              source={require('../../assets/images/post1.png')}
            />
            <Text style={style.postText}>Post</Text>
          </View>
          <View style={style.postIconsRow}>
            <Image
              style={style.postIcon}
              source={require('../../assets/images/post2.png')}
            />
            <Text style={style.postText}>Photo</Text>
          </View>
          <View style={style.postIconsRow}>
            <Image
              style={style.postIcon}
              source={require('../../assets/images/post3.png')}
            />
            <Text style={style.postText}>Promote</Text>
          </View>
          <View style={style.postIconsRow}>
            <Image
              style={style.postIcon}
              source={require('../../assets/images/post4.png')}
            />
            <Text style={style.postText}>View as</Text>
          </View>
        </View>
        <View style={style.hrLine} />
        <ScrollView horizontal={true}>
          <View style={{marginLeft: 14, flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={style.circleButton}>
                <Text style={style.circleButtonText}>Home </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.circleButton}>
                <Text style={style.circleButtonText}>About</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.circleButton}>
                <Text style={style.circleButtonText}>Photos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.circleButton}>
                <Text style={style.circleButtonText}>Posts</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.circleButton}>
                <Text style={style.circleButtonText}>Videos</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={style.circleButton}>
                <Text style={style.circleButtonText}>Events</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={style.hrLine} />
        <View>
          <Text style={style.text}>Grow your business</Text>
          <Text style={style.text}>Contact us </Text>
          <Text style={style.text}>Promote your page for USD 10 </Text>
          <Text style={[style.text, style.smallText]}>
            Reach more people in Africa{' '}
          </Text>
          <Text style={style.flowersText}>345 Followers</Text>
        </View>
        <View style={style.row}>
          <Image
            style={style.buttonColorImage}
            source={require('../../assets/images/Ellipse37.png')}
          />
          <View style={style.postButton}>
            <Text>Create a Post</Text>
          </View>
        </View>
        <View style={style.postRow}>
          <View style={style.row}>
            <Image
              style={style.postImage}
              source={require('../../assets/images/Ellipse2.png')}
            />
            <Text style={[style.post, style.postText2]}>Joshwell veldez</Text>
          </View>
          <Image
            style={style.postDotImage}
            source={require('../../assets/images/More(3).png')}
          />
        </View>
        <View style={{marginHorizontal: 15}}>
          <ImageBackground style={style.bgImage} source={image} />
        </View>
      </ScrollView>
    </View>
  );
}
