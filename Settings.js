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
  TouchableHighlightBase,
} from 'react-native';


export default class Settings extends Component {
   state = {
       name : "HASSAN SHAMIR",
       initials: "HS",
       Concept : "MAX",
       Sahala_Buy : "PRROD",
       Last_Login : "2018, 3May 14:00"
   };

    logOut = () =>{
        Alert.alert("Let's you Log-out of the app");
    }

    arabic = () =>{
        Alert.alert("I don't know what these is");
    }

    ask_sahala_bot = () =>{
        Alert.alert("Let's you ask sahala bot");
    }

    version_history = () =>{
        Alert.alert("Shows you version history");
    }

    inspection = () =>{
        Alert.alert("Let's you inspect things");
    }

    tracker = () =>{
        Alert.alert("Let's you track things");
    }

  render() {
      return(
    <View style={styles.container}>

        <View style={styles.header}>
            <Image source={require('./img/settings1.jpg')} style={{width:35, height:35, marginLeft:10}} />  
            <Image source={require('./img/settings2.png')} style={{width:90, height:35, marginLeft:90}} />
            <Image source={require('./img/settiings3.png')} style={{width:35, height:35, marginLeft:90}} />      
        </View>

        <View style={styles.showdetails}>
            <View style={styles.CircleShape}>
                <Text style={styles.incircleText}>{this.state.initials}</Text>
            </View>  
            <Text style={styles.showwdetailsHeader}>{this.state.name}</Text>
            <Text style={styles.showwdetailsTxt}>Concept: {this.state.Concept}</Text>
            <Text style={styles.showwdetailsTxt}>Sahala Buy {this.state.Sahala_Buy}</Text>
            <Text style={styles.showwdetailsTxt}>Last Login {this.state.Last_Login}</Text>         
            <TouchableOpacity  onPress={this.logOut} style={styles.signInTouch}>        
                <View style={styles.signInButton}>
                    <Text style={{color: 'white', fontSize: 16}}>Log out</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style={styles.mnbtn}>
            <TouchableOpacity onPress={this.arabic}>
            <Text style={{fontSize: 20, alignSelf: 'flex-start'}}> الخط العربي </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.mnbtn}>
            <TouchableOpacity onPress={this.ask_sahala_bot}>
            <Text style={{fontSize: 20}}> Ask Sahala Bot </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.mnbtn}>
            <TouchableOpacity onPress={this.version_history}>
            <Text style={{fontSize: 20}}> Version History</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.footer}>

            <View style={styles.footerDiv}>
                <TouchableOpacity onPress={this.inspection}>
                <Image source={require('./img/inspectionLogo.webp')} style={{width:30, height:30, marginLeft:20}} />
                <Text> Inspection </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerDiv}>
                <TouchableOpacity onPress={this.tracker}>
                <Image source={require('./img/trackerLogo.png')} style={{width:30, height:30, marginLeft:11}} />
                <Text> Tracker </Text>
                </TouchableOpacity>
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
  header: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    backgroundColor: 'white',
    paddingRight: 15    
  },
  showdetails: {
    alignItems: 'center',
    backgroundColor: '#c7c7c7',
    justifyContent: 'center',
    paddingBottom: 70,
    paddingTop: 30
  },
  CircleShape: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
  incircleText: {
    color: "white",
    fontSize: 40,
    marginTop: 100/4,
    marginLeft: 100/4
  },
  showwdetailsHeader: {
    fontSize: 18,
    marginTop:20,
    fontWeight: "bold",
  },
  showwdetailsTxt: {
    fontSize: 15,
    marginTop: 15,
    fontWeight: "bold",
  },
  signInTouch: {
    marginTop: 30,
  },
  signInButton: {
      alignContent: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      width: 100,
      height: 45,
      paddingLeft: 25,
      alignSelf: 'flex-start',
      backgroundColor: '#4a4848'
  },
  mnbtn: {
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    borderWidth: 0.5,
  },
  footer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    },
    footerDiv: {
        width: 180,
        paddingLeft:60
    }
});