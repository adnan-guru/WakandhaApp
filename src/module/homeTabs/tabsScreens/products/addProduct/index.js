import React from 'react';
import {Text, ScrollView, View, StatusBar, Image} from 'react-native';
import {style} from './style.js';
import Input from '../../../../../commonComponents/inputs';
import Button from '../../../../../commonComponents/buttons';
export default function AddProduct({navigation}) {
  const inputData = [
    {title: 'Title', placeholder: 'Type here'},
    {title: 'Price ', placeholder: 'Type here'},
    {title: 'Categories', placeholder: 'Type here'},
    {title: 'Address', placeholder: 'Type here'},
    {title: 'Description', placeholder: 'Type here'},
  ];

  return (
    <ScrollView style={style.container}>
      <StatusBar backgroundColor="blue" barStyle="light-content" />
      <View style={style.mainView}>
        <Text style={style.text}>Cancle</Text>
        <View style={style.headerTextRow}>
          <Image
            style={style.headerImage}
            source={require('../../../../../assets/images/Ellipse14.png')}
          />
          <View>
            <Text style={style.headerText}>Wakakanda </Text>
            <Text style={style.headerSubText}>Clothing store</Text>
          </View>
        </View>
        <View style={style.addImageView}>
          <Text style={[style.text, style.addImageText]}>+ Add Photos</Text>
        </View>
        <Text style={[style.headerSubText, style.para]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </Text>
        {inputData.map(item => {
          return <Input item={item} />;
        })}
      </View>
      <Button title="Done" />
    </ScrollView>
  );
}
