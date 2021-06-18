import React from 'react';
import {
  ScrollView,
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
      <ScrollView>
        <View>
          <Image
            style={style.headerImage}
            source={require('../../assets/images/Rectangle(3).png')}
          />
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={style.backIcon}
              source={require('../../assets/images/Back(1).png')}
            />
          </TouchableOpacity>

          <Image
            style={style.moreIcon}
            source={require('../../assets/images/More(4).png')}
          />
          <Image
            style={style.searchIcon}
            source={require('../../assets/images/Group55.png')}
          />
        </View>
        <View style={[style.row, {alignSelf: 'center'}]}>
          <Text style={style.headerText}>Save the child</Text>
          <Image
            style={style.nextIcon}
            source={require('../../assets/images/Vector4(1).png')}
          />
        </View>
        <Text style={[style.headerText, style.headerSubText]}>
          Privet group. 43569 Member
        </Text>
        <View>
          <View style={style.overLay}>
            <Image
              style={style.groupsImage1}
              source={require('../../assets/images/Group13(12).png')}
            />
          </View>
          <Image
            style={style.groupsImage1Dot}
            source={require('../../assets/images/Group50(1).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage2]}
            source={require('../../assets/images/Ellipse25(3).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage3]}
            source={require('../../assets/images/Group13(13).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage4]}
            source={require('../../assets/images/Ellipse25(5).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage5]}
            source={require('../../assets/images/Group13(12).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage6]}
            source={require('../../assets/images/Ellipse25(3).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage7]}
            source={require('../../assets/images/Ellipse25(4).png')}
          />
          <Image
            style={[style.groupsImage1, style.groupsImage8]}
            source={require('../../assets/images/Ellipse25(3).png')}
          />
          <View style={style.button}>
            <Text style={style.buttonText}>+Invite</Text>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View style={{marginLeft: 13, marginTop: 80, flexDirection: 'row'}}>
            <TouchableOpacity>
              <View style={[style.circleButton, style.first]}>
                <Text style={style.circleButtonText}>Watch party </Text>
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
        <View style={style.row}>
          <Image
            style={style.wrightProfile}
            source={require('../../assets/images/Ellipse1.png')}
          />
          <TextInput
            style={style.InputText}
            placeholder="Wright Something"
            placeholderTextColor="#595959"
          />
        </View>
        <View style={style.hrLine} />
        <View style={style.liveRow}>
          <View style={style.row}>
            <Text style={style.title}>Live </Text>
            <View style={style.line} />
          </View>
          <View style={style.row}>
            <Text style={[style.title, {marginLeft: 0}]}>Photo </Text>
            <View style={style.line} />
          </View>
          <View style={style.row}>
            <Text style={[style.title, {marginLeft: 0, marginRight: 28}]}>
              Rcommend
            </Text>
          </View>
        </View>
        <View style={[style.hrLine, {marginTop: 10}]} />
        <View style={style.postRow}>
          <View style={style.row}>
            <Image
              style={style.postImage}
              source={require('../../assets/images/Ellipse2.png')}
            />
            <Text style={style.postText}>Joshwell veldez</Text>
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
      </ScrollView>
    </View>
  );
}
