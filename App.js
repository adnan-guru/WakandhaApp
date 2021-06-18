import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Navigation />
    </View>
  );
}
