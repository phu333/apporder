import React from "react";
import GradientButton from 'react-native-gradient-buttons';
import { Button, SafeAreaView, StyleSheet,  TouchableOpacity ,
         View, TextInput, Dimensions,Image,Text } from "react-native"; 
import InputSpinner from "react-native-input-spinner";
import NumericInput from 'react-native-numeric-input'
import Modal from 'modal-enhanced-react-native-web';
const { width } = Dimensions.get("window"); 
export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      value:0,
      isModalVisible: false,
    };
  }
  toggleModalVisibility= (visible)=> {
        this.setState({
            isModalVisible:visible
        })
    }; 
  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked
    });
    this.props.handleNaviagation("Cart");
  };
  render() {
    const { isModalVisible } = this.state;
    return (
      <TouchableOpacity >
        <View
          elevation={2}
          style={{
            flex: 1,
            flexDirection: "row",
            backgroundColor: "#ffffff",
            marginHorizontal: 24,
            marginVertical: 8,
            borderRadius: 4,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            shadowOffset: {
              height: 1,
              width: 1
            }
          }}
        >
          <Image
            style={{
              width: 108,
              height: 138,
              borderTopLeftRadius: 4,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderBottomLeftRadius: 4
            }}
            source={{ uri: this.props.image }}
          />
          <View
            style={{
              padding: 16
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#333"
              }}
            >
              {this.props.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#666"
              }}
            >
              {this.props.cuisine},{" "}
              {this.props.isVegetarian ? (
                <Text style={{ color: "#4caf50", fontWeight: "bold" }}>
                  Veg
                </Text>
              ) : (
                <Text style={{ color: "#a92319", fontWeight: "bold" }}>
                  Non-Veg
                </Text>
              )}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "#999"
              }}
            >
              {this.props.label}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
                //width: "100%"
              }}
            >
              <Text
                style={{
                  fontSize: 21,
                  fontWeight: "bold",
                  color: "#ef6136"
                }}
              >
                {this.props.price}
              </Text>
              
             
             
            </View>
              <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between"
                //width: "100%"
              }}
            >
             <InputSpinner
	
	step={1}
	height={30}
  width={170}
	value={this.state.value}
	onChange={(num) => {
		this.setState({
      value:num
    });
	}}
/>
            </View>
          </View>

        </View>
      </TouchableOpacity>
    );
  }
}
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