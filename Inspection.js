import React, {Component} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';   

export default class Inspection extends Component {
	
	constructor(props) {
            super(props);
            this.state = {
                bodyContent:[
                        {'header':'Missing test report/testing not done as per LMG standards','minor': 0, 'major':0, 'critical':0, 'id': 1},
                        {'header':'Failed test report/without concept QA approval','minor': 0, 'major':0, 'critical':0, 'id': 2},
                        {'header':'Test report not from LMG approved lab','minor': 0, 'major':0, 'critical':0, 'id': 3},
                        {'header':'Missing report from LMG HelpDesk','minor': 0, 'major':0, 'critical':0, 'id': 4}                       
                    ],
                						
            };
			
        }
		
	backHome = async () => {   
	    this.props.handleBackHome();
    }
  
    scanImage  = async () => {   
	    this.props.handleOpenScan();
    }

    selectAge = (age, id)=>{
        Alert.alert('Key Pressed for :'+age);
        console.log(age+' '+id);

    }



  
  render(){
	return(
	  <SafeAreaView style={{flex: 1}}>	
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Icon name="arrow-left" color="#a9a9a9" style={styles.iconShop} size={25} onPress={this.backHome} />
                <Image source={require('./img/settings2.png')} style={{width:90, height:35}} />
                <Icon name="camera" color="#a9a9a9" style={styles.iconHome} onPress={this.backStatus} size={25} />
            </View>
            <View style={styles.statusInspection}>
                <View style={styles.statusInspectionTemplate}>
                    <View>
                        <Image
                        source={require('./img/Sample.png')}
                        style={styles.imageIconStyle}
                        />
		            </View>
                    <View style={styles.inspectionTextContentainer}> 
					    <View>
	                      <Text style={styles.inspectionText1}>PO</Text>
	                      <Text style={styles.inspectionText2}>2349983</Text>
                        </View>
					    <View>
	                      <Text style={styles.inspectionText1}>Style</Text>
	                      <Text style={styles.inspectionText2}>SP20-LTRT-KCT-GREEN</Text>
					    </View>
	                </View>
                    <View style={styles.sampleContainer}>
                        <Text style={styles.inspectionText1}>Sample</Text>
	                    <Text style={styles.inspectionText2}>125</Text>
		            </View>
                </View>
            </View>
            <View style={styles.body}>
                <View style={styles.status123}>
                    <View style={styles.status1}>
                        <Text style={{color: 'white', fontWeight: 'bold', paddingTop:3}}>MINOR</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', paddingTop:1, fontSize:25}}>0</Text>
                    </View>
                    <View style={styles.status2}>
                        <Text style={{color: 'white', fontWeight: 'bold', paddingTop:3}}>MAJOR</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', paddingTop:1, fontSize:25}}>0</Text>
                    </View>
                    <View style={styles.status3}>
                        <Text style={{color: 'white', fontWeight: 'bold', paddingTop:3}}>CRITICAL</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', paddingTop:1, fontSize:25}}>0</Text>
                    </View>
                </View>
                <ScrollView style={styles.scrrollView1} horizontal={true}>
                    <TouchableOpacity>
                        <View style={styles.scroll1Items}>
                            <Text style={{fontWeight:'bold', padding:5}}>ORDERING</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.scroll1Items}>
                            <Text style={{fontWeight:'bold', padding:5}}>WASHCARE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.scroll1Items}>
                            <Text style={{fontWeight:'bold', padding:5}}>TESTS</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.scroll1Items}>
                            <Text style={{fontWeight:'bold', padding:5}}>PACKAGING</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                
                <ScrollView style={styles.scrrollView3}>
                    {
                    this.state.bodyContent.map((item, index) => (                        
                        <View key={item.id} style={styles.scrrollView3Items}>
                            <Text style={{fontWeight:'bold', fontSize:18}}>{item.header}</Text>
                            <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:20, borderBottomWidth:0.5}}>
                                <View style={{flexDirection:'row', borderRightWidth:0.5, alignItems:'center', padding:10}}>
                                    <View style={styles.yellowDot}></View>
                                    <Text>Minor {item.minor}</Text>
                                </View>
                                <View style={{flexDirection:'row', padding:5, alignItems:'center'}}>
                                    <View style={styles.orangeDot}></View>
                                    <Text>Major {item.major}</Text>
                                </View>
                                <View style={{flexDirection:'row', borderLeftWidth:0.5, alignItems:'center', padding:10}}>
                                    <View style={styles.redDot}></View>
                                    <Text>Critical {item.critical}</Text>
                                </View>
                            </View>                            
                        </View>
                    ))
                   }

                </ScrollView>
            </View>
            <View style={styles.footerContainer}>
		            <Icon.Button
                  name="comment"
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                    onPress={this.pushImage}
                >
                <Text style={styles.footerText}>QA Comment</Text>
                </Icon.Button>
                <Icon.Button
                  name="bars"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                  onPress={this.scanImage}
                >
                <Text style={styles.footerText}>Mes Chart</Text>
                </Icon.Button>
                <Icon.Button
                  name="search"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                  onPress={this.scanImage}
                >
                <Text style={styles.footerText}>Inspection</Text>
                </Icon.Button>
                <Icon.Button
                  name="save"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                  onPress={this.scanImage}
                >
                <Text style={styles.footerText}>Save</Text>
                </Icon.Button>
                <Icon.Button
                  name="bars"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                  onPress={this.scanImage}
                >
                <Text style={styles.footerText}>More</Text>
                </Icon.Button>
            </View>
        </View>
      </SafeAreaView>
	);	  
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  headerContainer: {	 
	backgroundColor: '#fff',
	height:50,
	flexDirection: 'row',
	justifyContent: 'space-between',
	borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    paddingTop: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  statusInspection:{
    backgroundColor: '#fff',
    height:100,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
   },
   statusInspectionTemplate:{
    backgroundColor: '#4169E1',
    color: '#4169E1',
    height:90,
    width:380,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10
   },
   imageIconStyle: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
   },
   inspectionTextContentainer:{
    flexDirection: 'column'
   },
   inspectionText1:{
    color: '#fff',
    fontSize: 12,
   },
   inspectionText2:{
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
   },
   sampleContainer:{
    alignSelf: 'flex-start',
    paddingTop: 7
    },
    footerContainer: {
        backgroundColor: '#fff',
        height:50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    iconButtonSend:{
        color: '#2196f3',
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    footerText:{	  
        fontSize: 15,
        fontWeight: 'bold',
        color: '#a9a9a9',
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    scrrollView1:{
        marginTop:10,
        marginBottom:5,
        marginRight:5,
        marginLeft:5,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor: 'white',
    },
    scroll1Items: {
        borderRadius: 10,
        width: 100,
        marginLeft:5,
        marginRight:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrrollView2:{
        marginTop:5,
        marginBottom:5,
        marginRight:5,
        marginLeft:5,
        paddingTop:5,
        paddingBottom:5,
    },
    scrrollView3Items: {
        height: 110,
        paddingLeft:10,
        paddingRight: 10,
    },
    scrrollView3: {
        backgroundColor: 'white',
        marginTop:5,
        marginBottom: 5,
    },
    status123:{
        flexDirection : 'row',
        marginTop : 10,
        marginLeft : 10,
        marginRight : 10
    },
    status1: {
        backgroundColor : '#fed715',
        alignItems: 'center',
        width: 120,
        height: 60,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
    },
    status2: {
        backgroundColor : '#FF9F15',
        alignItems: 'center',
        width: 130,
        height: 60,
    },
    status3: {
        backgroundColor : '#F92305',
        alignItems: 'center',
        width: 120,
        height: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius:10
    },
    yellowDot:{
        height:10,
        width: 10,
        backgroundColor: '#fed715',
        borderRadius : 10/2,
        marginRight: 5,
    },
    orangeDot: {
        height:10,
        width: 10,
        backgroundColor: '#FF9F15',
        borderRadius : 10/2,
        marginRight: 5,
    },
    redDot: {
        height:10,
        width: 10,
        backgroundColor: '#F92305',
        borderRadius : 10/2,
        marginRight: 5,
    },
});