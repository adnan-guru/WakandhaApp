import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {style} from './style.js';
import Input from '../../../commonComponents/input/Input.js';
import Button from '../../../commonComponents/buttons/Button.js';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function SignUp({navigation}) {
  const data = [
    {title: 'First Name ', placeholder: 'First name'},
    {title: 'Last Name', placeholder: 'Last Name'},
  ];
  return (
    <ScrollView style={style.container}>
      <View>
        <Image
          style={style.logo}
          source={require('../../../assets/images/appLogo.png')}
        />
        <Text style={style.title}>Sign Up</Text>
      </View>

      <View style={style.inputsView}>
        {data.map(item => {
          return <Input item={item} />;
        })}
        <Button
          onPress={() => navigation.navigate('SignUpWithPhone')}
          title="Next"
        />
      </View>
      <View style={style.bottomTextView}>
        <Text style={style.bottomText}>Already have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpWithPhone')}>
          <Text style={style.bottomSubText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
