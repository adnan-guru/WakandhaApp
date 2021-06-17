import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {style} from './style.js';
import Button from '../../../commonComponents/buttons/Button.js';
export default function SignUpWithPhone({navigation}) {
  return (
    <ScrollView style={style.container}>
      <Image
        style={style.logo}
        source={require('../../../assets/images/appLogo.png')}
      />
      <Text style={style.title}>Sign Up with phone</Text>
      <View style={style.inputsView}>
        <Text style={style.inputTitle}>Country</Text>
        <View style={style.dropDownView}>
          <Text style={style.dropDownText}>South Africa</Text>
          <Image
            style={style.icon}
            source={require('../../../assets/icons/arrow.png')}
          />
        </View>
      </View>
      <View style={style.inputView}>
        <View>
          <Text style={[style.inputTitle, style.codeTitle]}>Country</Text>
          <View style={style.codeView}>
            <Text style={style.codeText}>+27</Text>
          </View>
        </View>
        <View>
          <Text style={[style.inputTitle, style.codeTitle]}>Phone Number </Text>
          <View style={[style.codeView, style.phoneView]}>
            <Text style={style.dropDownText}>XXXXXXXXXX</Text>
          </View>
        </View>
      </View>
      <View style={style.button}>
        <Button onPress={() => navigation.navigate('Tabs')} title="Sign Up" />
      </View>
    </ScrollView>
  );
}
