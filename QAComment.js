// Example of File Picker in React Native
// https://aboutreact.com/file-picker-in-react-native/

// Import React
import React, {Component} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';   

export default class QAComment extends Component {
	
	constructor(props) {
            super(props);

            this.state = {
						
            };
			
        }
		
		backHome = async () => {   
	this.props.handleBackHome();
  }
  
  scanImage  = async () => {   
	this.props.handleOpenScan();
  }
  
  render(){
	return(
	  <SafeAreaView style={{flex: 1}}>	
        <View style={styles.container}>
        {/*To show single file attribute*/}
		      <View style={styles.headerContainer}>
	        {/* Icon Component */}
            <Icon name="arrow-left" color="#a9a9a9" style={styles.iconShop} size={30} onPress={this.backHome} />
            <Text style={styles.headerText}>Baby Shop</Text>
		        <Icon name="camera" color="#a9a9a9" style={styles.iconHome} onPress={this.backStatus} size={30} />
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
	                      <Text style={styles.inspectionText}>PO</Text>
	                      <Text style={styles.inspectionText}>2349983</Text>
                      </View>
					            <View>
	                      <Text style={styles.inspectionText}>Style</Text>
	                      <Text style={styles.inspectionText}>SP20-LTRT-KCT-GREEN</Text>
					            </View>
	                  </View>
					          <View style={styles.sampleContainer}>
                      <Text style={styles.inspectionText}>Sample</Text>
	                    <Text style={styles.inspectionText}>125</Text>
		                </View>
                  </View>
              </View>	  
	            <View style={styles.qaContainer}>
                <View style={styles.qaTemplate}>
	                <View style={styles.qaTextContentainer}> 
	                    <Text style={styles.qaText}>QAComment</Text>						
	                </View>
                </View> 
	            </View>
		          <ScrollView style={styles.qaCommentContainer}>
			          <Text style={styles.qaCommentText}>FIT CUM PP:</Text>
				        <Text style={styles.qaCommentText}>SAMPLE SIZE:3-4&7-8YRS</Text>
				        <Text style={styles.qaCommentText}>PLS IMPROVE WORKMANSHIP</Text>
				        <Text style={styles.qaCommentText}>IMPROVE THE HANDFEEL</Text>
				        <Text style={styles.qaCommentText}>ATTACH CARE LABEL POSITION OK</Text>
				        <Text style={styles.qaCommentText}>MISSING TEST REPORTS</Text>
				        <Text style={styles.qaCommentText}>INCORPORATE ABOVE COMMENT AND SUBMIT</Text>
				        <Text style={styles.qaCommentText}>REFERENCE SAMPLE SIZE FOR APROVAL</Text>
				        <Text style={styles.qaCommentText}>ALONG WITH GPT FPT</Text>
				        <Text style={styles.qaCommentText}>IMPORTANT NOTE:-PLS NOTE THAT ALWAYS</Text>
				        <Text style={styles.qaCommentText}>FILL THE MEASUREMENT IN BELOW CHART</Text>
	            </ScrollView>
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
  imageIconStyle: {
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  footerContainer: {
	  backgroundColor: '#fff',
	  height:50,
	  flexDirection: 'row',
	  justifyContent: 'space-around'
  },
  footerText:{	  
	   fontSize: 15,
	   fontWeight: 'bold',
    color: '#a9a9a9',
    textAlign: 'center',
	backgroundColor: '#fff'
  },
  qaText:{
	  fontSize: 25,
	   fontWeight: 'bold',
    color: '#2196f3',
    textAlign: 'center',
  },
  headerContainer: {	 
	  backgroundColor: '#fff',
	  height:50,
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	  borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#a9a9a9',
    textAlign: 'center',
	  backgroundColor: '#fff'
  },
  iconShop:{
	  marginTop: 10,
	  marginLeft: 10,
	  backgroundColor: '#fff'
  },
  iconHome:{
	   marginTop: 10,
	   marginRight:10,
	   backgroundColor: '#fff'
  },
  iconButtonSend:{
	  color: '#2196f3',
	  backgroundColor: '#fff',
	  flexDirection: 'column'
  },
  qaContainer: {
	  backgroundColor: '#fff',
	  height:50,
	  flexDirection: 'row',
	  justifyContent: 'space-around',
	  alignItems: 'center',
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
  inspectionTextContentainer:{
	  flexDirection: 'column'
  },
  inspectionText:{
	  color: '#fff',
	  fontSize: 15,
  },
  sampleContainer:{
	  alignSelf: 'flex-start',
  }, 
  qaCommentContainer: {
	backgroundColor: '#fff',
	flexDirection: 'column',
	alignSelf:'center'
  },
  qaCommentText:{
	   fontSize: 19,
	   fontWeight: 'bold',
  }
});