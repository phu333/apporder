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
import ListItem from "./ListItem2";
import Modal from 'modal-enhanced-react-native-web';



export default class Food extends React.Component{
    constructor(props) {
    super(props);
  }
    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Food",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
      
    };
  };
    render() {
  return (
   <View style={styles.container}>
    <GradientButton
      style={{ marginVertical: 8 }}
      text="Thêm món ăn"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={30}
      width={300}
      radius={15}
      impact
      impactStyle='Light'
      blueMarine
      onPressAction={() => this.props.navigation.navigate("FoodAdd")}
    />
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
}}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 8,
    marginBottom: 8,
    flex: 1, justifyContent: 'flex-end', alignItems: 'center'
  }
});