import React from 'react';
import {
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import image from '../../../../../assets/images/Rectangle13(2).png';
import {style} from './style.js';
import Card from '../../../../../commonComponents/productCard';

export default function TabVideo({navigation}) {
  const cardData = [
    {
      image: require('../../../../../assets/images/Rectangle13.png'),
    },
    {
      image: require('../../../../../assets/images/Rectangle14.png'),
    },
    {
      image: require('../../../../../assets/images/Rectangle15.png'),
    },
    {
      image: require('../../../../../assets/images/Rectangle16.png'),
    },
  ];
  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ImageBackground source={image} style={style.image}>
        <View style={style.imageIcon}>
          <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Image source={require('../../../../../assets/icons/Back.png')} />
          </TouchableOpacity>
          <Image source={require('../../../../../assets/icons/More(1).png')} />
        </View>
      </ImageBackground>
      <View style={style.imageTitleView}>
        <Text style={style.imageTitle}>
          Embroidered Ethnic Kurti Women cloths
        </Text>
      </View>
      <Text style={[style.imageTitle, style.subText]}>$220</Text>
      <View style={style.circleIconsRow}>
        <View style={style.iconCircle}>
          <Image
            style={style.circleIcon}
            source={require('../../../../../assets/icons/Shape(1).png')}
          />
          <Text style={style.circleIconText}>Like </Text>
        </View>
        <View style={style.iconCircle}>
          <Image
            style={style.circleIcon}
            source={require('../../../../../assets/icons/Rectangle15.png')}
          />
          <Text style={style.circleIconText}>Save </Text>
        </View>
        <View style={style.iconCircle}>
          <Image
            style={style.circleIcon}
            source={require('../../../../../assets/icons/Vector(5).png')}
          />
          <Text style={style.circleIconText}>Share </Text>
        </View>
        <View style={style.iconCircle}>
          <Image
            style={style.circleIcon}
            source={require('../../../../../assets/icons/cart1.png')}
          />
          <Text style={style.circleIconText}>Buy </Text>
        </View>
      </View>
      <View style={style.detailText}>
        <Text style={style.text}>34 Likes</Text>
        <View style={style.hrLine} />
        <Text style={style.paraTitle}>Details </Text>
        <Text style={[style.circleIconText, style.para]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the
        </Text>
        <View style={[style.hrLine, style.paraHr]} />
        <Text style={style.paraTitle}>Store Information</Text>
        <View style={style.cardHeaderRow}>
          <View>
            <View style={style.cardHeaderTextRow}>
              <Image
                style={style.cardHeaderImage}
                source={require('../../../../../assets/images/Ellipse14.png')}
              />
              <View>
                <Text style={style.cardHeaderText}>Wakakanda </Text>
                <Text style={style.cardHeaderSubText}>Clothing store</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.buttonText}>FOLLOWING</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={[style.paraTitle, style.productCardTitle]}>
          More Products
        </Text>
      </View>
      <View style={style.card}>
        {cardData.map(item => {
          return <Card item={item} />;
        })}
      </View>
    </ScrollView>
  );
}
