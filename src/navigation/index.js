import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {style} from './style.js';
import {
  ScrollView,
  Image,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Chat from '../module/chatTabsScreens/chat';
import Login from '../module/auth/login';
import SignUp from '../module/auth/signUp';
import SignUpWithPhone from '../module/auth/signUpWithPhone';
import ProductDetaile from '../module/homeTabsScreens/products/productDetaile';
import AddProduct from '../module/homeTabsScreens/products/addProduct';
import ChatDetail from '../module/chatTabsScreens/chatDetail';
import ChatDetail1 from '../module/chatTabsScreens/chatDetail1';
import UserProfile from '../module/userProfile/';
import Page from '../module/page';
import Group from '../module/group';
import CreateShop from '../module/createShop';
import OnBoarding from '../module/onBoarding';
import Payment from '../module/payment';
import HomePage from '../module/homeTabsScreens/homePage';
import TabVideo from '../module/homeTabsScreens/video';
import ProductPage from '../module/homeTabsScreens/products/productPage';
import Friends from '../module/homeTabsScreens/friends';
import Notification from '../module/homeTabsScreens/notification';
import Menu from '../module/homeTabsScreens/menu';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpWithPhone" component={SignUpWithPhone} />
        <Stack.Screen name="Tabs" component={HomeTabs} />
        <Stack.Screen name="ChatTabs" component={ChatTabs} />
        <Stack.Screen name="ProductDetaile" component={ProductDetaile} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="ChatDetail1" component={ChatDetail1} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="CreateShop" component={CreateShop} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigator;
function ChatTabs() {
  return (
    <View style={style.main}>
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={style.container}>
          <View style={style.headerView}>
            <View>
              <Image source={require('../assets/images/Ellipse1.png')} />
            </View>
            <View>
              <Image
                style={style.headerLogo}
                source={require('../assets/images/image1.png')}
              />
            </View>
            <View style={style.iconRow}>
              <Image
                style={style.searchIcon}
                source={require('../assets/icons/loupe1.png')}
              />
              <Image
                style={style.logoIcon}
                source={require('../assets/icons/Group62.png')}
              />
            </View>
          </View>
        </View>
        <View>
          <Tab.Navigator
            tabBarOptions={{
              activeTintColor: '#DDB937',
              showLabel: true,
              showIcon: false,

              style: {backgroundColor: 'black', marginTop: 21},
              indicatorStyle: {
                backgroundColor: '#DDB937',
              },
              labelStyle: {
                fontSize: 14,
                fontWeight: '700',
              },
            }}>
            <Tab.Screen name="CHATS" component={Chat} />
            <Tab.Screen name="WAK'S" component={Chat} />
            <Tab.Screen name="CALLS" component={Chat} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
}

function HomeTabs({navigation}) {
  return (
    <ScrollView style={style.main}>
      <StatusBar backgroundColor="red" barStyle="red" />
      <View style={{marginHorizontal: 18}}>
        <View style={style.headerView}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('ChatTabs')}>
              <Image source={require('../assets/images/Ellipse1.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <Image
              style={style.headerLogo}
              source={require('../assets/images/image1.png')}
            />
          </View>
          <View style={style.iconRow}>
            <Image
              style={style.searchIcon}
              source={require('../assets/icons/loupe1.png')}
            />
            <Image
              style={style.logoIcon}
              source={require('../assets/icons/Group62.png')}
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
                <Image source={require('../assets/images/Group.png')} />
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
                  source={require('../assets/images/group6.png')}
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
                  source={require('../assets/images/group5.png')}
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
                  source={require('../assets/images/group3.png')}
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
                  source={require('../assets/images/group4.png')}
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
                  source={require('../assets/images/group2.png')}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
      {/* <View style={style.hrLine} /> */}
    </ScrollView>
  );
}
