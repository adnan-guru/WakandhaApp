import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {style} from './style.js';
import {ScrollView, Image, View, StatusBar} from 'react-native';

import Chat from '../chatTabsScreens/chat';

const Tab = createMaterialTopTabNavigator();
function ChatTabs() {
  return (
    <View style={style.main}>
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <View style={{marginHorizontal: 18}}>
          <View style={style.headerView}>
            <View>
              <Image source={require('../../../assets/images/Ellipse1.png')} />
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
export default ChatTabs;
