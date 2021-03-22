import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import HomeAct from './components/home';
import MenuAct from './components/menu';
import FoodAct from './components/food';
import OrderAct from './components/order';
import CartAct from "./components/Cart";
import FoodAddAct from "./components/foodadd";
import FoodUpdateAct from "./components/foodupdate";
import LoginAct from "./components/login";
const RootStack = createStackNavigator(
{
  Home: { screen: HomeAct },
  Menu: { screen: MenuAct },
  Food: { screen: FoodAct },
  Order: { screen: OrderAct },
  Cart: { screen: CartAct },
  FoodAdd: { screen: FoodAddAct },
  FoodUpdate: { screen: FoodUpdateAct },
  Login: { screen: LoginAct },
},
{
    initialRouteName: 'Login',
}

);
const Apps = createAppContainer(RootStack)
export default class App extends Component {
  render() {
    return <Apps />;
  }
}

YellowBox.ignoreWarnings(
      ['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
]);