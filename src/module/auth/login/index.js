import React from 'react';
import {Text, ScrollView, Image, View, StatusBar} from 'react-native';
import {style} from './style.js';
import Input from '../../../commonComponents/inputs';
import Button from '../../../commonComponents/buttons';
export default function Login({navigation}) {
  const data = [
    {title: 'Email', placeholder: 'Type your email'},
    {title: 'Password', placeholder: 'Your Password'},
  ];
  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />

      <Image
        style={style.logo}
        source={require('../../../assets/images/appLogo.png')}
      />
      <Text style={style.title}>Log In</Text>
      <View style={style.inputsView}>
        {data.map(item => {
          return <Input item={item} />;
        })}
        <Button title="Login" onPress={() => navigation.navigate('SignUp')} />
        <Text style={style.text}>Forget Password? </Text>
        <View style={style.bottomTextView}>
          <Text style={[style.text, style.bottomText]}>
            Don’t have an account?
          </Text>
          <Text style={[style.text, style.bottomSubText]}>Sign Up</Text>
        </View>
      </View>
    </ScrollView>
  );
}
