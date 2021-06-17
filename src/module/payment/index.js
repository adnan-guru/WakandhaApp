import React, {useState} from 'react';
import {ScrollView, StatusBar, View, Image, Text} from 'react-native';
import {style} from './style.js';
import CheckBox from 'react-native-check-box';
import Button from '../../commonComponents/buttons/Button.js';
export default function UserProfile({navigation}) {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <ScrollView>
        <View style={style.header}>
          <Image source={require('../../assets/icons/Back.png')} />
          <Text style={style.headerTitle}>Payment</Text>
        </View>
        <View style={style.cardMargin}>
          <View style={style.card}>
            <Text style={style.cardTitle}>Kenneth Lendoye </Text>
            <Text style={style.cardSubTitle}>Payment Surprise </Text>
            <Text style={style.cardAmount}>$150</Text>
          </View>
        </View>
        <View>
          <Text style={style.paymentTitle}>Payment Method</Text>
          <Text style={style.paymentSubTitle}>Select your payment method</Text>
        </View>
        <View style={style.checkBoxView}>
          <View style={style.selectView}>
            <CheckBox
              checkBoxColor="#DDB937"
              rightTextStyle={style.checkBoxLabel}
              style={style.CheckBox}
              onClick={() => {
                this.setState({
                  isChecked: isSelected,
                });
              }}
              isChecked={isSelected}
              rightText={'Visa '}
            />
          </View>
          <View style={style.selectView}>
            <CheckBox
              checkBoxColor="#DDB937"
              rightTextStyle={style.checkBoxLabel}
              style={style.CheckBox}
              onClick={() => {
                this.setState({
                  isChecked: isSelected,
                });
              }}
              isChecked={isSelected}
              rightText={'MasterCard '}
            />
          </View>
          <View style={style.selectView}>
            <CheckBox
              checkBoxColor="#DDB937"
              rightTextStyle={style.checkBoxLabel}
              style={style.CheckBox}
              onClick={() => {
                this.setState({
                  isChecked: setSelection,
                });
              }}
              isChecked={isSelected}
              rightText={'PayPal '}
            />
          </View>
          <View style={style.selectView}>
            <CheckBox
              checkBoxColor="#DDB937"
              rightTextStyle={style.checkBoxLabel}
              style={style.CheckBox}
              onClick={() => {
                this.setState({
                  isChecked: isSelected,
                });
              }}
              isChecked={isSelected}
              rightText={'Orange Money '}
            />
          </View>
          <View style={style.selectView}>
            <CheckBox
              checkBoxColor="#DDB937"
              rightTextStyle={style.checkBoxLabel}
              style={style.CheckBox}
              onClick={() => {
                this.setState({
                  isChecked: isSelected,
                });
              }}
              isChecked={isSelected}
              rightText={'Airtel Money'}
            />
          </View>
          <View style={style.selectView}>
            <CheckBox
              checkBoxColor="#DDB937"
              rightTextStyle={style.checkBoxLabel}
              style={style.CheckBox}
              onClick={() => {
                this.setState({
                  isChecked: isSelected,
                });
              }}
              isChecked={isSelected}
              rightText={'Dolium'}
            />
          </View>
          <View style={style.button}>
            <Button title="Go for Payment" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
