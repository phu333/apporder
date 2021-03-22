import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar"; 
import Modal from 'modal-enhanced-react-native-web';
import React, { useState } from "react"; 
import GradientButton from 'react-native-gradient-buttons';
import { Button, SafeAreaView, StyleSheet,  TouchableWithoutFeedback ,
         View, TextInput, Dimensions,ImageBackground } from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartButton from "./common/CartButton";
import Popover from 'react-native-popover-view';
const { width } = Dimensions.get("window"); 


export default class Home extends React.Component {
    state = {
    isModalVisible: false,
    inputValue:""
  };
    
    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Home",
      headerStyle: {
        elevation: 0,
        shadowOpacity: 0
      },
     
    };
  };
  
  
    // Create toggleModalVisibility function that will 
    // Open and close modal upon button clicks. 
    toggleModalVisibility= (visible)=> {
        this.setState({
            isModalVisible:visible
        })
    }; 
  render() {
      
       const { isModalVisible } = this.state;
       console.log(isModalVisible)
  return (
   <SafeAreaView  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <ImageBackground
style={{flex: 1}}
source={{
    uri:
    'https://assets.bonappetit.com/photos/601da15943d8360a0f73bfa1/16:9/w_1600%2Cc_limit/HLY_Pasta%2520With%2520Lentils%2520and%2520Mushrooms.jpg',
}}>
 
<SafeAreaView  style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
<StatusBar style="auto" /> 
      <GradientButton
      style={{ marginVertical: 8 }}
      text="Chỉnh sửa menu"
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

   
    
      
     <Modal animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.toggleModalVisibility(false);
          }}>
                <View style={styles.viewWrapper}> 
                    <View style={styles.modalView}> 
                        <TextInput placeholder="Enter table..." 
                                   value={this.state.inputValue} style={styles.textInput}  
                                   onChangeText={(value) => this.setState({
            inputValue:value
        })} /> 
  
                       
                        <GradientButton
      style={{ marginVertical: 8 }}
      text="Xác nhận"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={30}
      width={200}
      radius={15}
      impact
      impactStyle='Light'
      blueViolet
      onPressAction={() =>(
      this.toggleModalVisibility(false),
       this.props.navigation.navigate("Menu"))}
    />
     <GradientButton
      style={{ marginVertical: 8 }}
      text="Thoát"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={30}
      width={200}
      radius={15}
      impact
      impactStyle='Light'
      blueViolet
      onPressAction={() =>(
      this.toggleModalVisibility(false)
       )}
    />
                    </View> 
                </View> 
              
                
            </Modal> 
            <GradientButton
      style={{ marginVertical: 8 }}
      text="Đặt món"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={30}
      width={300}
      radius={15}
      impact
      impactStyle='Light'
      blueViolet
      onPressAction={() => this.toggleModalVisibility(!isModalVisible)}
    />
    <GradientButton
      style={{ marginVertical: 8 }}
      text="Kiểm tra order"
      textSyle={{ fontSize: 20 }}      
      gradientBegin="#874f00"
      gradientEnd="#f5ba57"
      gradientDirection="diagonal"
      height={30}
      width={300}
      radius={15}
      impact
      impactStyle='Light'
      purpleViolet
      onPressAction={() => this.props.navigation.navigate("Order")}
    />
     </SafeAreaView >
     
      </ImageBackground>
     </SafeAreaView >
  );
}}
const styles = StyleSheet.create({ 
    screen: { 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "#fff", 
    }, 
    viewWrapper: { 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "rgba(0, 0, 0, 0.2)", 
    }, 
    modalView: { 
        alignItems: "center", 
        justifyContent: "center", 
        position: "absolute", 
        top: "50%", 
        left: "50%", 
        elevation: 5, 
        transform: [{ translateX: -(width * 0.4) },  
                    { translateY: -90 }], 
        height: 180, 
        width: width * 0.8, 
        backgroundColor: "#fff", 
        borderRadius: 7, 
    }, 
    textInput: { 
        width: "80%", 
        borderRadius: 5, 
        paddingVertical: 8, 
        paddingHorizontal: 16, 
        borderColor: "rgba(0, 0, 0, 0.2)", 
        borderWidth: 1, 
        marginBottom: 8, 
    }, 
});