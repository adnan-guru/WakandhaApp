import React from 'react';
import {Text, ScrollView, Image, View, StatusBar} from 'react-native';
import {style} from './style.js';
import Input from '../../../commonComponents/inputs';
import Button from '../../../commonComponents/buttons';
export default function SignUp({navigation}) {
  const data = [
    {title: 'First Name ', placeholder: 'First name'},
    {title: 'Last Name', placeholder: 'Last Name'},
  ];
  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <Image
        style={style.logo}
        source={require('../../../assets/images/appLogo.png')}
      />
      <Text style={style.title}>Sign Up</Text>
      <View style={style.inputsView}>
        {data.map(item => {
          return <Input item={item} />;
        })}
        <Button
          onPress={() => navigation.navigate('SignUpWithPhone')}
          title="Next"
        />
        <View style={style.bottomTextView}>
          <Text style={style.bottomText}>Already have an account?</Text>
          <Text style={style.bottomSubText}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
}
