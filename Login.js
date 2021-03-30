import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
  View,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  Image,
  SwitchBase,
} from 'react-native';


export default class Login extends Component {
    state = {
        switchValue : true
    };

    login = () =>{
        Alert.alert('Lets You Login')
    }

  render() {
      return(
    <View style={styles.container}>
        <View style={styles.switchHeader}>
            <View style={styles.switchCon}>
            <Text style={styles.boldText}>{this.state.switchValue ? 'EN':'AR'}</Text>
            <Switch
                value = {this.state.switchValue}
                onValueChange = {(switchValue)=>this.setState({switchValue})}/>
            </View>
        </View>
        <View style={styles.logoCenter}>
            <Image source={require('./img/loginLogo.png')} style={{width:100, height:110}} />
            <View style={styles.buttonPlane}>
            <Button 
                onPress={this.login}
                title={'Login'}
                color = '#858585'
                borderRadius= '50' 
                />
            </View>
        </View>
        
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  switchHeader: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'flex-end',
    paddingRight: 15    
  },
  boldText: {
    fontWeight: 'bold',
    paddingTop: 2,
  },
  switchCon: {
    flexDirection: 'row',
    borderRadius: 30,
    paddingRight: 7,
    paddingLeft: 7,
    borderWidth: 1 
  },
  logoCenter: {
    paddingTop: 200,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  buttonPlane: {
    paddingTop: 100,
  },
  loginButton: {
      borderRadius: 40,
      width: 70,
  } 
});