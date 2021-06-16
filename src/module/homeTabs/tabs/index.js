import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {style} from './style.js';
import {ScrollView, Image, View, StatusBar} from 'react-native';
import HomePage from '../tabsScreens/homePage';
import TabVideo from '../tabsScreens/video';
import ProductPage from '../tabsScreens/products/productPage';
import Friends from '../tabsScreens/friends';
import Notification from '../tabsScreens/notification';
import Menu from '../tabsScreens/menu';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Tab = createMaterialTopTabNavigator();
function MyTabs({navigation}) {
  return (
    <ScrollView style={style.main}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={{marginHorizontal: 18}}>
        <View style={style.headerView}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ChatTabs')}>
              <Image source={require('../../../assets/images/Ellipse1.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={style.headerLogo}
              source={require('../../../assets/images/image1.png')}
            />
          </View>
          <View style={style.iconRow}>
            <Image
              style={style.searchIcon}
              source={require('../../../assets/icons/loupe1.png')}
            />
            <Image
              style={style.logoIcon}
              source={require('../../../assets/icons/Group62.png')}
            />
          </View>
        </View>
      </View>
      <View>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'yellow',
            showLabel: false,
            showIcon: true,
            iconStyle: {
              width: 'auto',
              height: 20,
            },
            tabStyle: {width: 'auto'},
            style: {backgroundColor: 'black', marginTop: 21},
            indicatorStyle: {
              backgroundColor: 'rgba(221, 185, 55, 1)',

              marginLeft: 6,
            },
          }}>
          <Tab.Screen
            name="Home"
            component={HomePage}
            options={{
              tabBarIcon: () => (
                <Image source={require('../../../assets/images/Group.png')} />
              ),
            }}
          />
          <Tab.Screen
            name="Video"
            component={TabVideo}
            options={{
              tabBarIcon: () => (
                <Image
                  style={style.tabImage}
                  source={require('../../../assets/images/group6.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Shoping"
            component={ProductPage}
            options={{
              tabBarIcon: () => (
                <Image
                  style={style.tabImage}
                  source={require('../../../assets/images/group5.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Friends"
            component={Friends}
            options={{
              tabBarIcon: () => (
                <Image
                  style={style.tabImage}
                  source={require('../../../assets/images/group3.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="notification"
            component={Notification}
            options={{
              tabBarIcon: () => (
                <Image
                  style={style.tabImage}
                  source={require('../../../assets/images/group4.png')}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Menu"
            component={Menu}
            options={{
              tabBarIcon: () => (
                <Image
                  style={style.barImage}
                  source={require('../../../assets/images/group2.png')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
      <View style={style.hrLine} />
    </ScrollView>
  );
}
export default MyTabs;
