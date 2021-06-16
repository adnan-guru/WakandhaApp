import {style} from './style.js';
import React from 'react';
import Carousel from 'react-native-banner-carousel';
import {
  ScrollView,
  Image,
  Text,
  View,
  StatusBar,
  Dimensions,
} from 'react-native';
import {color} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
const BannerWidth = Dimensions.get('window').width - 50;
const text = ['1', '2', '3'];

export default class App extends React.Component {
  renderPage(index) {
    return (
      <View style={{marginTop: 200}} key={index}>
        <View style={{marginTop: -170, alignSelf: 'center'}}>
          <Text style={style.sliderTitle}>Welcome to Wakandha</Text>
          <Text style={style.sliderPara}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since
          </Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ScrollView>
          <View style={style.mainView}>
            <View style={style.ImageView}>
              <Image source={require('../../assets/images/onboarding.png')} />
            </View>
            <Carousel
              activePageIndicatorStyle={{
                backgroundColor: '#fff',
              }}
              pageSize={BannerWidth}
              autoplay
              autoplayTimeout={5000}
              loop
              index={0}>
              {text.map((image, index) => this.renderPage(image, index))}
            </Carousel>
          </View>
          <TouchableOpacity
          //  onPress={() => navigation.navigate('Payment')}
          >
            <Text style={style.nextText}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
