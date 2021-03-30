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
import Inspection from './Inspection'; 

class App extends Component {
	
	constructor(props) {
            super(props);

            this.state = {
				singleFile:'',
				image:null,
				imageList: [],
				diffTime:0,
				files:[],
				homePage: true,
				statusPage: false,
				inspectionPage: false,
				imageStatusList:[],				
            };
			this.selectOneFile = this.selectOneFile.bind(this);
			this.pushImage = this.pushImage.bind(this);
			this.checkStatus = this.checkStatus.bind(this);
			this.backHome = this.backHome.bind(this);
			this.backStatus = this.backStatus.bind(this);
        }
		
		pushImage = async () => {   
    var startTime = new Date().getTime();
	console.log('Length::',this.state.files.length);
	for(let i=0;i<this.state.files.length;i++){
	const formData = new FormData();
	var img = {
          uri: this.state.files[i].uri,
          type: this.state.files[i].type,
          name: this.state.files[i].name,
        };	
	formData.append('file', img);
    fetch(
        'http://104.211.219.204:8090/upload4',
	    //'http://localhost:8090/upload4',
        {
          method: 'post',
		      body: formData
        }
      ).then(res => {
          console.log('OutputData::',res);	
			    var data = JSON.stringify(res);
			    console.log('OutputData1::',data);
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
            throw error;
          }); 
    }

	  var endTime = new Date().getTime();  
	  console.log('endTime',endTime);
	  var diffTime = endTime-startTime;
    var arrImage=[];
	  for(let i=0;i<this.state.imageStatusList.length;i++){
		  let url={};
		  url['url']=this.state.imageStatusList[i].url;
		  if(this.state.imageStatusList[i].status ==='Yet to be Upload'){
	      url['status']="In Progress"; 
      } 
      else {
			  url['status']=this.state.imageStatusList[i].status;
		  }
	    url['name']=this.state.imageStatusList[i].name;
	    arrImage.push(url);
	  }
	
	this.setState(
	{
		diffTime: diffTime,
		files:[],
	  imageList: [],
		homePage: true,
		imageStatusList: arrImage
	});
  }
  
  
  checkStatus = async () => { 
    var arrImage=[];
	for(let i=0;i<this.state.imageStatusList.length;i++){
		let url={};
		url['url']=this.state.imageStatusList[i].url;
		console.log('Other Value::;',this.state.imageStatusList[i]);
		console.log('Name Value::;',this.state.imageStatusList[i].name);
		  let res = await fetch(
        'http://104.211.219.204:8090/filesStatus/'+this.state.imageStatusList[i].name,
		//'http://localhost:8090/upload2',
        {
           method: 'get'
        }
      );
      let responseJson = await res.json();
	  console.log('responseJson:::',responseJson);
	  console.log('responseJson:::',responseJson.message);
	  
	url['status']=responseJson.message; 
	url['name']=this.state.imageStatusList[i].name; 
	  arrImage.push(url);
	}
	
	this.setState(
	{
		imageStatusList: arrImage
	});
  }
  
  backHome = async () => {   
	this.setState(
	{
		homePage: true,
		statusPage: false,
		inspectionPage: false
	});
  }
  
  backStatus = async () => {   
	this.setState(
	{
		homePage: false,
		statusPage: true,
		inspectionPage: false
	});
  }
  
  openInspection = async () => {  
this.setState(
	{
		homePage: false,
		statusPage: false,
		inspectionPage: true
	});  
  }
  
	selectOneFile = async () => {
    //Opening Document Picker for selection of one file
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      //Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      console.log('URI : ' + res.uri);
      console.log('Type : ' + res.type);
      console.log('File Name : ' + res.name);
      console.log('File Size : ' + res.size);
	  let url ={};
	url['url']=res.uri;
	url['status']="Yet to be Upload";
	url['name']=res.name;
      //Setting the state to show single file attributes
      this.setState({
		  singleFile: res,
		  imageList: [...this.state.imageList,url],
		  imageStatusList: [...this.state.imageStatusList,url],
		  files:[...this.state.files,res],
		  homePage: true,
		  statusPage: false
	  });
		  
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert('Canceled from single doc picker');
      } else {
        //For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  render(){
	  
	  return(
	  <SafeAreaView style={{flex: 1}}>	  
      
	  {this.state.homePage &&
      <View style={styles.container}>
        {/*To show single file attribute*/}
		 <View style={styles.headerContainer}>
	  {/* Icon Component */}
            <Icon name="android" color="#a9a9a9" style={styles.iconShop} size={30} />
        <Text style={styles.headerText}>Baby Shop</Text>
		<Icon name="cog" color="#a9a9a9" style={styles.iconHome} onPress={this.backStatus} size={30} />
      </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={this.selectOneFile}>
          {/*Single file selection button*/}
          <Image
            source={require('./Inspection.png')}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
<TouchableOpacity
          activeOpacity={0.5}
          style={styles.buttonStyle}
          onPress={this.selectOneFile}>
          {/*Single file selection button*/}
          <Image
            source={require('./Schedule.png')}
            style={styles.imageIconStyle}
          />
        </TouchableOpacity>
		<ScrollView>
	   {
		  this.state.imageList.map((image1,index)=>{
		    return (
			<View key={index} style={styles.statusView}>
			<Image source={{ uri: image1.url }} style={{ width: 150, height: 150,marginTop:10,marginBottom:10 }} />
			<Text style={styles.statusText}>{ image1.status }</Text>
			 </View>
			) 
	  })
	  }
	  
	  </ScrollView>
       <View style={styles.footerContainer}>

		<Icon.Button
    name="search-minus"
	color="#a9a9a9"
	style={styles.iconButtonSend}
    onPress={this.openInspection}
  >
    <Text style={styles.footerText}>Inspection</Text>
  </Icon.Button>
  <Icon.Button
    name="file"
	color="#a9a9a9"
	style={styles.iconButtonSend}
    onPress={this.pushImage}
  >
    <Text style={styles.footerText}>Tracker</Text>
  </Icon.Button>
  
      </View>
      </View>
	  }
	  {this.state.statusPage &&
      <View style={styles.container}>
	  <View style={styles.headerContainer}>
	  {/* Icon Component */}
            <Icon name="arrow-left" style={styles.iconShop}  onPress={this.backHome} size={30} color="#fff" />
        <Text style={styles.headerText}>ABC Shop</Text>
		<Icon name="home" style={styles.iconHome} size={30} color="#fff" />
      </View>

        {/*To show single file attribute*/}
        
		  <Icon.Button
    name="send"
	color="#900"
	style={styles.iconButtonSend}
    onPress={this.checkStatus}
  >
    Refresh Status
  </Icon.Button>
        
		<ScrollView>
	   {
		  this.state.imageStatusList.map((image1,index)=>{
		    return (
			 <View key={index} style={styles.statusView}>
			<Image source={{ uri: image1.url }} style={{ width: 150, height: 150,marginTop:10,marginBottom:10 }} />
			<Text style={styles.statusText}>{ image1.status }</Text>
			 </View>
			) 
	  })
	  }
	  
	  </ScrollView>

      </View>
	  }
	  {this.state.inspectionPage && 
	  <Inspection 
	  handleBackHome = {this.backHome.bind(this)}
	  />
	 
	  }
    </SafeAreaView>
	  );
	  
  }

		
}



export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  textStyle: {
    backgroundColor: '#fff',
    fontSize: 15,
    color: 'black',
  },
  buttonStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#DDDDDD',
    padding: 5,
  },
  imageIconStyle: {
    height: 325,
    width: 400,
    resizeMode: 'stretch',
  }, imgButtonText:{
	  fontSize: 25,
	   fontWeight: 'bold',
    color: '#2196f3',
    textAlign: 'center',
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
  statusText:{
	  fontSize: 25,
	   fontWeight: 'bold',
    color: '#2196f3',
    textAlign: 'center',
	marginTop:70,
	marginBottom:10,
	marginLeft:10
  },
  statusView:{
	  flex: 1,
	  flexDirection: 'row'
  },
   headerContainer: {	 
	backgroundColor: '#fff',
	height:50,
	flexDirection: 'row',
	justifyContent: 'space-between'
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
  }
});