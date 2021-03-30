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


export default class WelcomePage extends Component {
    state = {

    };

 
  render() {
      return(
    <View style={styles.container}>

        <View style={styles.upperDiv}>
            <Image source={require('./img/welcomeLogo.jpg')} style={{width:200, height:200}} />
        </View>

        <View style={styles.lowerDiv}>
            <View style={{paddingBottom:30}}>
            <Text style={styles.aa}>Hi, Udaya!</Text>
            <Text style={styles.aa}>Welcome.</Text>
            </View>
        </View>

        
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upperDiv: {
      backgroundColor: '#fbd405',
      height: '50%',
      justifyContent: 'flex-end',
      flexDirection: 'row'
  },
  lowerDiv: {
      backgroundColor: '#fbd405',
      height: '50%',
      justifyContent: 'flex-end'
  },
  aa: {
      fontSize: 30,
      paddingLeft: 30
  }
});