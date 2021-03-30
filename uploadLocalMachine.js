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

import DocumentPicker from 'react-native-document-picker';
import SQLite from 'react-native-sqlite-storage';

/** global.db = SQLite.openDatabase(
  {
    name: 'SQLite',
    location: 'default',
    createFromLocation: '~SQLite.db',
  },
  () => { },
  error => {
    console.log("ERROR: " + error);
  }
);
*/
let db;

export default class uploadLocalMachine extends Component {
 
  constructor(props) {
      super(props);
        db = SQLite.openDatabase({
        name: 'SQLite.db',
        createFromLocation : 2,
      },
      this.okCallback,
      this.errorCallback,
      );
      SQLite.DEBUG = true;
      this.state = {
        singleFile : '',
        imageList : [],
        files : [],
        image_id : '',
        image_name : '',
        user_name : '',
        image : '',
        fetchedData : [],
      };
      this.executeQuery = this.executeQuery.bind(this);
      this.CreateTable = this.CreateTable.bind(this);
      this.UploadFile = this.UploadFile.bind(this);
      this.ShowData = this.ShowData.bind(this);
      this.ConvertPdf = this.ConvertPdf.bind(this);
    }
    async okCallback(){
      console.log("SUCCESS IN CONNECTING");
    
    }
    errorCallback(err){
      console.log("ERROR  "+err);''
    }

    handleImageId = (text) => {
      this.setState({image_id : text});
    }

    handleUserName = (text) => {
      this.setState({user_name : text});
    }


   SelectFile = async () => {
       try{
            const res = await DocumentPicker.pick({
              type: [DocumentPicker.types.images],
            });
            console.log(res.uri, ' ',
                        res.type, ' ',
                        res.name, ' ', 
                        res.size);
            let url ={};
            url['url']=res.uri;
            this.setState({
                          singleFile : res,
                          imageList : [...this.state.imageList,url],
                          files : [...this.state.files,res],
                          image : String(res),
                          image_name : String(res.name),
                        });
            console.log("RES -->",JSON.stringify(res));
   } catch(err){
         if(DocumentPicker.isCancel(err)){
           // user canceled the pciker and  exit any dialogs and menus and move on
           Alert.alert('Canceled from single doc picker');
         }
         else{
           Alert.alert('Unknown Error: ' + JSON.stringify(err));
         }
       }

   }; 
   // Table Name: UpSahalaImages
   // ImageID   Integer
   // ImageName  Text
   // UserName   Text
   // Image      Blob


    /**
  * Execute sql queries
  * 
  * @param sql
  * @param params
  * 
  * @returns {resolve} results
  */
 executeQuery = (sql, params = []) => new Promise((resolve, reject) => {
 db.transaction((trans) => {
   trans.executeSql(sql, params, (trans, results) => {
     console.log("Resolved")
     resolve(results);
     console.log(results)
   },
     (error) => {
       reject(error);
       console.log("Exists errrror "+error)
     });
 });
});
  async CreateTable() {
    console.log("Entering Create Table");
    let Table = await this.executeQuery("CREATE TABLE IF NOT EXISTS `UpSahalaImages` (`ImageId`	TEXT, `ImageName`	TEXT, `UserName`	TEXT, `Image`	TEXT);",[]);
    console.log("Created  :"+Table);
  }
  async UploadFile(){ 
    console.log("INSERTING Upload File");
    this.setState({fetchedData : []})
    console.log([this.state.image_id, this.state.image_name, this.state.user_name, this.state.image]);
    let singleInsert = await this.executeQuery("INSERT INTO UpsahalaImages(ImageID, ImageName, UserName, Image) VALUES (?, ?, ?, ?);",[this.state.image_id, this.state.image_name, this.state.user_name, this.state.image]);
    console.log("INSERTED : "+Object.values(singleInsert))
   };

  async ShowData(){
    console.log("Entering  ShowData");
    let Table = await this.executeQuery("SELECT * FROM UpSahalaImages;",[]);
    console.log("Created  :"+Table);
    var rows = Table.rows;
    for (let i = 0; i < rows.length; i++) {
        var item = rows.item(i);
        console.log(item);
        this.setState({fetchedData:[...this.state.fetchedData,item]})
    }
   };
/*
  async ConvertPdf(){
    console.log("Entering ConvertPdf...");
    let options = {
      html : "<View> {this.state.fetchedData.map(item => (<View><Text>item.ImageName</Text> <Text>item.UserName</Text> <Text>item.ImageId</Text> </View> ))} </View>",
      fileName:'sahala',
      directory:'Documents',
    };
    let file = await RNHTMLtoPDF.convert(options);
    console.log("The PDF is saved at :"+file.filePath);
  }
*/
  render() {
      return(
    <View style={styles.container}>  
        <TouchableOpacity onPress={this.CreateTable}>
            <View style={styles.createDatabase}>
                <Text style={{color: 'white', fontWeight: '600'}}>Create Database</Text>
            </View>
        </TouchableOpacity>
        <TextInput style={styles.textInputs} placeholder="Enter Image ID" onChangeText = {this.handleImageId}></TextInput>
        <TextInput style={styles.textInputs} placeholder="Enter User Name" onChangeText = {this.handleUserName}></TextInput>
        <TouchableOpacity onPress={this.SelectFile}>
            <View style={styles.selectFile}>
                <Text style={{color: 'white', fontWeight: '600'}}>Select File</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.UploadFile}>
            <View style={styles.uploadFile}>
                <Text style={{color: 'white', fontWeight: '600'}}>Upload File</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.ShowData}>
            <View style={styles.uploadFile}>
                <Text style={{color: 'white', fontWeight: '600'}}>Fetch Data</Text>
            </View>
        </TouchableOpacity>
        <ScrollView style={styles.scroll1}>
          {
            this.state.fetchedData.map(item =>(
              <View key={item.ImageId} style={styles.dataShow}>
                <Text style={{fontSize:12, marginRight:5}}>{item.ImageName}</Text>
                <Text style={{fontSize:12, marginRight:5}}>{item.UserName}</Text>
                <Text style={{fontSize:12, marginRight:5}}>{item.ImageId}</Text>
              </View>
      ))
          }
        </ScrollView>
        <TouchableOpacity onPress={this.ConvertPdf}>
            <View style={styles.uploadFile}>
                <Text style={{color: 'white', fontWeight: '600'}}>Convert PDF</Text>
            </View>
        </TouchableOpacity>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputs: {
      borderWidth : 0.5,
      borderRadius : 10,
      width : 200,
      marginTop: 10,
  },
  selectFile: {
    marginTop : 10,
    height : 40,
    width: 100,
    borderRadius : 10,
    backgroundColor: 'black',
    alignItems : 'center',
    justifyContent: 'center'
  },
  createDatabase:{
    marginTop : 10,
    height : 40,
    width: 150,
    borderRadius : 10,
    backgroundColor: 'black',
    alignItems : 'center',
    justifyContent: 'center'
  },
  uploadFile: {
    marginTop : 10,
    height : 40,
    width: 100,
    borderRadius : 10,
    backgroundColor: 'black',
    alignItems : 'center',
    justifyContent: 'center'
  },
  scroll1:{
    width: 300,
    marginTop : 10,
    marginBottom:30,
  },
  dataShow : {
    flexDirection :'row',
    margin:7
  }
});