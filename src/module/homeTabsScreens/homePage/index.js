import React, {useState} from 'react';
import ProfileCard from '../../../commonComponents/homeProfileCard/HomeProfileCard.js';
import image from '../../../assets/images/MaskGroup.png';
import image2 from '../../../assets/images/MaskGroup(1).png';
import {
  ScrollView,
  View,
  Image,
  Text,
  ImageBackground,
  Modal,
  Pressable,
} from 'react-native';
import {style} from './style.js';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function HomePage({navigation}) {
  const cardData = [
    {title: "+ Add Wak 's"},
    {
      title: "+ Add Wak 's",
      image: require('../../../assets/images/UserStory(4).png'),
    },
    {
      title: "+ Add Wak 's",
      image: require('../../../assets/images/UserStory(3).png'),
    },
    {
      title: "+ Add Wak 's",
      image: require('../../../assets/images/UserStory(2).png'),
    },
    {title: "+ Add Wak 's"},
    {
      title: "+ Add Wak 's",
      image: require('../../../assets/images/UserStory(4).png'),
    },
    {
      title: "+ Add Wak 's",
      image: require('../../../assets/images/UserStory(3).png'),
    },
    {
      title: "+ Add Wak 's",
      image: require('../../../assets/images/UserStory(2).png'),
    },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={style.container}>
      <ScrollView>
        <View style={style.profileCardsView}>
          <ScrollView horizontal={true}>
            {cardData.map(item => {
              return <ProfileCard item={item} />;
            })}
          </ScrollView>
        </View>

        <View style={{marginHorizontal: 15, marginTop: 28}}>
          <View style={style.mainView}>
            <View style={style.cardView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UserProfile')}>
                <Image
                  source={require('../../../assets/images/Ellipse4(2).png')}
                />
              </TouchableOpacity>

              <View style={style.textView}>
                <Text style={style.imageTitle}>Kenneth</Text>
                <Text style={(style.imageTitle, style.text)}>
                  uploaded a photo
                </Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  style={style.cardDotImg}
                  source={require('../../../assets/icons/More.png')}
                />
              </TouchableOpacity>
            </View>
            <ImageBackground source={image} style={style.cardBgImage}>
              <View style={style.bgImageView}>
                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/thumb.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji1.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji2.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji3.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji4.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji5.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji6.png')}
                  />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image
                    style={style.thumbImg}
                    source={require('../../../assets/images/emoji7.png')}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <View style={style.iconsView}>
              <Image
                style={style.icon}
                source={require('../../../assets/icons/share(1).png')}
              />
              <Image
                style={style.icon}
                source={require('../../../assets/icons/comment.png')}
              />
              <Image
                style={style.icon}
                source={require('../../../assets/icons/heartcopy.png')}
              />
              <Image
                style={style.microIcon}
                source={require('../../../assets/icons/share(1).png')}
              />
              <Text style={style.cardText}>6 min ago</Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 15, marginTop: 28}}>
          <View style={[style.mainView, style.bgColor]}>
            <View style={style.cardView}>
              <Image
                source={require('../../../assets/images/Ellipse4(2).png')}
              />
              <View style={style.textView}>
                <Text style={style.imageTitle}>Kenneth</Text>
                <Text style={(style.imageTitle, style.text)}>
                  uploaded a photo
                </Text>
              </View>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  style={style.cardDotImg}
                  source={require('../../../assets/icons/More.png')}
                />
              </TouchableOpacity>
            </View>
            <ImageBackground source={image2} style={style.cardBgImage} />
          </View>
        </View>
      </ScrollView>
      <View style={style.postImage}>
        <TouchableOpacity>
          <Image source={require('../../../assets/icons/Post.png')} />
        </TouchableOpacity>
      </View>

      <View style={style.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={style.centeredView}>
            <View style={style.modalView}>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <View style={style.modalButton}>
                  <Text style={style.back}>x</Text>
                </View>
              </Pressable>
              <View style={style.madalRow}>
                <Image
                  style={style.modalIcon}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={style.modalText}>Save Post</Text>
              </View>
              <View style={style.hrLine} />
              <View style={style.madalRow}>
                <Image
                  style={[style.modalIcon, style.modalSubIcon]}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={[style.modalText, style.modalSubText]}>
                  View Post
                </Text>
              </View>
              <View style={style.hrLine} />
              <View style={style.madalRow}>
                <Image
                  style={[style.modalIcon, style.modalSubIcon]}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={[style.modalText, style.modalSubText]}>
                  Report to Admin
                </Text>
              </View>
              <View style={style.hrLine} />
              <View style={style.madalRow}>
                <Image
                  style={[style.modalIcon, style.modalSubIcon]}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={[style.modalText, style.modalSubText]}>
                  I don't want to see this
                </Text>
              </View>
              <View style={style.hrLine} />
              <View style={style.madalRow}>
                <Image
                  style={[style.modalIcon, style.modalSubIcon]}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={[style.modalText, style.modalSubText]}>
                  Find support or report post
                </Text>
              </View>
              <View style={style.hrLine} />
              <View style={style.madalRow}>
                <Image
                  style={[style.modalIcon, style.modalSubIcon]}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={[style.modalText, style.modalSubText]}>
                  Something went wrong
                </Text>
              </View>
              <View style={style.hrLine} />
              <View style={style.madalRow}>
                <Image
                  style={[style.modalIcon, style.modalSubIcon]}
                  source={require('../../../assets/icons/Group62.png')}
                />
                <Text style={[style.modalText, style.modalSubText]}>
                  Turn on notification for this post
                </Text>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
