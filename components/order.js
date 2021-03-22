import 'react-native-gesture-handler';
import * as React from 'react';
import GradientButton from 'react-native-gradient-buttons';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';





export default class Order extends React.Component {
    constructor(props) {
    super(props);
  }
    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Order",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      
    };
  };
    render() {
  return (
   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ImageBackground
style={{flex: 1}}
source={{
    uri:
    'https://www.toptal.com/designers/subtlepatterns/patterns/moroccan-flower-dark.png',
}}>
<View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
      
     </View></ImageBackground>
    </View>
  );
}}