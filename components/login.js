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


export default class Login extends React.Component {
   state={
    email:"",
    password:""
  }
    
    static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Login",
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
      
       
  return (
   <View style={styles.container}>
       <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
         <View style={styles.inputView} >
          <TextInput   
            secureTextEntry={true} 
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
         <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
  );
}}
const styles = StyleSheet.create({ 
    container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
   inputView:{
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
   inputText:{
    height:50,
    color:"white"
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
});