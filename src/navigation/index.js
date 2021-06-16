import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../module/auth/login';
import SignUp from '../module/auth/signUp';
import SignUpWithPhone from '../module/auth/signUpWithPhone';
import Tabs from '../module/homeTabs/tabs';
import ChatTabs from '../module/chat/Tabs';
import ProductDetaile from '../module/homeTabs/tabsScreens/products/productDetaile';
import AddProduct from '../module/homeTabs/tabsScreens/products/addProduct';
import ChatDetail from '../module/chat/chatTabsScreens/chatDetail';
import ChatDetail1 from '../module/chat/chatTabsScreens/chatDetail1';
import UserProfile from '../module/userProfile/';
import Page from '../module/page';
import Group from '../module/group';
import CreateShop from '../module/createShop';
import OnBoarding from '../module/onBoarding';
import Payment from '../module/payment';

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignUpWithPhone" component={SignUpWithPhone} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ChatTabs" component={ChatTabs} />
        <Stack.Screen name="ProductDetaile" component={ProductDetaile} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="ChatDetail" component={ChatDetail} />
        <Stack.Screen name="ChatDetail1" component={ChatDetail1} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="Group" component={Group} />
        <Stack.Screen name="CreateShop" component={CreateShop} />
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default StackNavigator;
