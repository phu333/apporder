import 'react-native-gesture-handler';
import * as React from 'react';
import GradientButton from 'react-native-gradient-buttons';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Constants from "../utils/constants";
import foodData from "../food-data.json";
import ListItem from "./ListItem";
import CartButton from "./common/CartButton";
import Modal from 'modal-enhanced-react-native-web';



export default class Menu extends React.Component {
    constructor(props) {
    super(props);
  }
    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Menu",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      headerRight: (
        <CartButton
          onPress={() => {
            navigation.navigate("Cart");
          }}
        />
      )
    };
  };
  handleNaviagation = () => {
    this.props.navigation.navigate("Menu");
  };
   render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={foodData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ListItem
              name={item.name}
              image={item.image}
              cuisine={item.cuisine}
              price={item.price}
              label={item.label}
              isVegetarian={item.isVegetarian}
              handleNaviagation={this.handleNaviagation}
            />
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8
  }
});