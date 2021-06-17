import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {style} from './style.js';
import Input from '../../../commonComponents/input/Input.js';
import Button from '../../../commonComponents/buttons/Button.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Login({navigation}) {
  const data = [
    {title: 'Email', placeholder: 'Type your email'},
    {title: 'Password', placeholder: 'Your Password'},
  ];
  return (
    <ScrollView style={style.container}>
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
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[style.text, style.bottomSubText]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
