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
import t from 'tcomb-form-native'
import ImageFactory from 'react-native-image-picker-form'
const Form = t.form.Form
const DocumentFormStruct = t.struct({
  image: t.String
})
 
type Props = {}
type State = {
  value: Object,
  options: Object
}

export default class FoodAdd extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
      value: {},
      options: {
        fields: {
          image: {
            config: {
              title: 'Select image',
              options: ['Open camera', 'Select from gallery', 'Cancel']
              // Used on Android to style BottomSheet
              style: {
                titleFontFamily: 'Roboto'
              }
            },
            error: 'No image provided',
            factory: ImageFactory
          }
        }
      }
    }
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
    <Form
        ref={(ref: any) => {
          this.form = ref
        }}
        type={DocumentFormStruct}
        value={this.state.value}
        options={this.state.options}
      />
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
      onPressAction={() => this.props.navigation.navigate("Food")}
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