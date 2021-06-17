import React from 'react';
import {View, StatusBar} from 'react-native';
import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#2B2B2B'}}>
      <StatusBar backgroundColor="#2B2B2B" barStyle="light-content" />
      <Navigation />
    </View>
  );
}
