import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Alert,
  View,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  Image,
  SwitchBase,
} from 'react-native';


export default class SignUp extends Component {
   state = {

   };

    signIn = () =>{
        Alert.alert('Lets You Signin')
    }

    cancel = () =>{
        Alert.alert('Lets you Cancel the Page')
    }

  render() {
      return(
    <View style={styles.container}>

        <View style={styles.header}>
        <TouchableOpacity onPress={this.cancel}>
            <Text style={{color:'#4098e6', fontWeight: 'bold'}}>Cancel</Text>
            </TouchableOpacity>
            <Text style={{paddingLeft:110, fontWeight:'bold'}}>Sign In</Text>            
        </View>

        <View>
            <Image source={require('./img/signInLogo.png')} style={{width:360, height:90, marginLeft:20}} />
        </View>

        <View style={styles.signUpForm}>
           
            <Text style={styles.boldText}>Sign in with your organizational account</Text>
            <TextInput  placeholder='Enter youe email or employee id' 
                        style={styles.inputStyle}/>
            <TextInput  placeholder='Password'
                        style={styles.inputStyle}/>
            <TouchableOpacity  onPress={this.signIn} style={styles.signInTouch}>        
                <View style={styles.signInButton}>
                    <Text style={{color: 'white'}}>Sign In</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>
        <Text style={styles.footerhead}>Find Your Domain</Text>
        <Text style={styles.footerContent}>Your username is your domain followed by a back slash
        and your employee number. For example: coming/1234</Text>    
        </View>      
     
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: '#bdbdbd',
    paddingRight: 15    
  },
  signUpForm: {
    marginTop: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#777',
    paddingLeft: 10,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 10,
    width: 300,
    height: 40
  },
  boldText: {
    fontWeight: 'bold',
    paddingTop: 20,
    marginLeft: 20,
    paddingBottom:10
  },
  signInTouch: {
    marginTop: 50,
    marginLeft: 20
  },
  signInButton: {
      alignContent: 'center',
      width: 100,
      paddingTop: 5,
      height: 32,
      paddingLeft: 22,
      alignSelf: 'flex-start',
      backgroundColor: '#0b7bde'
  },
  footer: {
      width: 320,
      marginTop: 130,
      paddingLeft: 10,
      marginLeft: 40,
      paddingTop: 20,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
  },
  footerhead: {
      fontSize: 20
  },
  footerContent: {
      paddingTop: 5,
      fontSize: 12
  }
});