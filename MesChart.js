import React, {Component} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Alert,
  Modal,
  TextInput
} from 'react-native';

// Import Document Picker
import DocumentPicker from 'react-native-document-picker';

// Import vector icons
import Icon from 'react-native-vector-icons/FontAwesome';   
import SQLite from 'react-native-sqlite-storage';

import {SwipeListView} from 'react-native-swipe-list-view';

let db;

export default class MesChart extends Component {
	
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
                curr_age : '',
                curr_id : 1,
                curr_bd_id : 1,
                header : '',
                to_be : '',
                actual : '',
                bodyContent:[
                        {'Header':'Body Length From HPS-Empire', 'ToBe':'19.5', 'Actual':'00','id':1,'count':1},
                        {'Header':'Body Length From HPS-Above', 'ToBe':'41.5', 'Actual':'60','id':2,'count':1},
                        {'Header':'Body Length From HPS-Below', 'ToBe':'33', 'Actual':'20','id':3,'count':1},  
                        {'Header':'Body Length From HPS-Empire', 'ToBe':'10.5', 'Actual':'50','id':4,'count':1},
                        {'Header':'Body Length From HPS-Down', 'ToBe':'29.5', 'Actual':'10','id':5,'count':1},                        
                    ],
                pageContent : [
                        {
                        "age":"1 TO 2 YR", 
                        "id":1,
                        "bodyContent":[
                          {"Header":"Body Length From HPS-Empire", "ToBe":"19.5","Actual":"00","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"41.5", "Actual":"60","id":2,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"33", "Actual":"20","id":3,'count':1},
                          {"Header":"Body Length From HPS-Empire", "ToBe":"10.5", "Actual":"50","id":4,'count':1},
                          {"Header":"Body Length From HPS-Down", "ToBe":"29.5", "Actual":"10","id":5,'count':1}
                                        ]
                        },
                        {
                          "age":"2 TO 3 YRS", 
                          "id":2,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Down", "ToBe":"29.5","Actual":"40","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"71.8", "Actual":"62","id":2,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"70", "Actual":"72","id":3,'count':1}
                                        ]
                        },
                        {
                          "age":"3 TO 4 YRS", 
                          "id":3,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Empire", "ToBe":"29.5","Actual":"30","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"65.5", "Actual":"60","id":2,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"33", "Actual":"20","id":3,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"73.5", "Actual":"70","id":4,'count':1},
                          {"Header":"Body Length From HPS-Down", "ToBe":"19.5", "Actual":"15","id":5,'count':1}
                                        ]
                        },
                        {
                          "age":"4 TO 5 YRS", 
                          "id":4,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Below", "ToBe":"19.5","Actual":"00","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"41.5", "Actual":"60","id":2,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"33", "Actual":"20","id":3,'count':1},
                          {"Header":"Body Length From HPS-Empire", "ToBe":"10.5", "Actual":"50","id":4,'count':1}
                                        ]
                        },
                        {
                          "age":"5 TO 6 YRS", 
                          "id":5,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Empire", "ToBe":"19.5","Actual":"00","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"41.5", "Actual":"60","id":2,'count':1}
                                        ]
                        },
                        {
                          "age":"6 TO 7 YRS", 
                          "id":6,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Above", "ToBe":"49.5","Actual":"54","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"81.5", "Actual":"91","id":2,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"23", "Actual":"22","id":3,'count':1},
                          {"Header":"Body Length From HPS-Over", "ToBe":"10.5", "Actual":"50","id":4,'count':1}
                                        ]
                        },
                        {
                          "age":"7 TO 8 YRS", 
                          "id":7,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Below", "ToBe":"9.5","Actual":"00","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"81.5", "Actual":"70","id":2,'count':1},
                          {"Header":"Body Length From HPS-Down", "ToBe":"33", "Actual":"25","id":3,'count':1},
                          {"Header":"Body Length From HPS-Empire", "ToBe":"54.7", "Actual":"52","id":4,'count':1},
                          {"Header":"Body Length From HPS-Down", "ToBe":"19.5", "Actual":"11","id":5,'count':1}
                                        ]
                          
                        },
                        {
                          "age":"8 TO 9 YRS", 
                          "id":8,
                          "bodyContent":[
                          {"Header":"Body Length From HPS-Down", "ToBe":"69.5","Actual":"10","id":1,'count':1},
                          {"Header":"Body Length From HPS-Above", "ToBe":"87.5", "Actual":"80","id":2,'count':1},
                          {"Header":"Body Length From HPS-Below", "ToBe":"63", "Actual":"50","id":3,'count':1}
                                        ]
                          
                        }   
                       ]               						
            };			
        }
    async okCallback(){
        console.log("SUCCESS IN CONNECTING");
          }
    select_bodyContent = (x) =>{
            this.setState({curr_bd_id : x});
            console.log(x);
        }
    
    errorCallback(err){
        console.log("ERROR  "+err);''
        }
        
    getHeader = (txt) =>{
        this.setState({header : txt})
    }

    getToBe = (txt) => {
        this.setState({to_be : txt})
    }

    getActual = (txt) => {
        this.setState({actual : txt})
    }
	backHome = async () => {   
	    this.props.handleBackHome();
    }
  
    scanImage  = async () => {   
	    this.props.handleOpenScan();
    }

    selectAge = (age, id)=>{
        console.log(age+' '+id);
        var a = this.state.pageContent[id-1].bodyContent;
        this.setState({bodyContent : a});   
        this.setState({curr_id : id, curr_age : age});

    }
 
    ZerothFunction = () => {
        //Alert.alert("-1/4");
        var age_id = this.state.curr_id;
        var bd_id = this.state.curr_bd_id;
        var pre_val = this.state.bodyContent[bd_id-1].Actual;
        var new_val = parseFloat(pre_val) - 0.25;
        console.log("Pre" + pre_val + "  New" + new_val);
        this.setState({bodyContent : 
            [
                ...this.state.bodyContent.slice(0,bd_id-1),
                Object.assign(this.state.bodyContent[bd_id-1],{"Actual":new_val.toString()}),
                ...this.state.bodyContent.slice(bd_id)
            ]
        });
        console.log(this.state.bodyContent)
        var cc = this.state.bodyContent;
        this.setState({pageContent:
            [
                ...this.state.pageContent.slice(0,age_id-1),
                Object.assign(this.state.pageContent[age_id-1], {"bodyContent" : 
                    //[...this.state.pageContent[age_id-1].bodyContent.slice(0, bd_id-1),
                    Object.assign(this.state.pageContent[age_id-1].bodyContent, cc)
                    //...this.state.pageContent[age_id-1].bodyContent.slice(bd_id) ]
                    }),
                ...this.state.pageContent.slice(age_id)
            ]
        });
        console.log(this.state.pageContent[age_id-1].bodyContent);
    }

    FirstFunction = () => {
     
    }

    SecondFunction = () => {
        //Alert.alert("+1/4");
        var age_id = this.state.curr_id;
        var bd_id = this.state.curr_bd_id;
        var pre_val = this.state.bodyContent[bd_id-1].Actual;
        var new_val = parseFloat(pre_val) + 0.25;
        console.log("Pre" + pre_val + "  New" + new_val);
        this.setState({bodyContent : 
            [
                ...this.state.bodyContent.slice(0,bd_id-1),
                Object.assign(this.state.bodyContent[bd_id-1],{"Actual":new_val.toString()}),
                ...this.state.bodyContent.slice(bd_id)
            ]
        });
        console.log(this.state.bodyContent);
        var cc = this.state.bodyContent;
        this.setState({pageContent:
            [
                ...this.state.pageContent.slice(0,age_id-1),
                Object.assign(this.state.pageContent[age_id-1], {"bodyContent" : 
                    //[...this.state.pageContent[age_id-1].bodyContent.slice(0, bd_id-1),
                    Object.assign(this.state.pageContent[age_id-1].bodyContent, cc),
                    //...this.state.pageContent[age_id-1].bodyContent.slice(bd_id)
                    //]
                    }),
                ...this.state.pageContent.slice(age_id)
            ]
        });
        console.log(this.state.pageContent[age_id-1].bodyContent);
    }

    ThirdFunction = () => {
        //Alert.alert("Match");
        var age_id = this.state.curr_id;
        var bd_id = this.state.curr_bd_id;
        var to_be_val = this.state.bodyContent[bd_id-1].ToBe;
        this.setState({bodyContent : 
            [
                ...this.state.bodyContent.slice(0,bd_id-1),
                Object.assign(this.state.bodyContent[bd_id-1],{"Actual":to_be_val.toString()}),
                ...this.state.bodyContent.slice(bd_id)
            ]
        });
        console.log(this.state.bodyContent);
        var cc = this.state.bodyContent;
        this.setState({pageContent:
            [
                ...this.state.pageContent.slice(0,age_id-1),
                Object.assign(this.state.pageContent[age_id-1], {"bodyContent" : 
                    //[...this.state.pageContent[age_id-1].bodyContent.slice(0, bd_id-1),
                    Object.assign(this.state.pageContent[age_id-1].bodyContent, cc),
                    //...this.state.pageContent[age_id-1].bodyContent.slice(bd_id)
                    //]
                    }),
                ...this.state.pageContent.slice(age_id)
            ]
        });
        console.log(this.state.pageContent[age_id-1].bodyContent);
    }

    addNew = () =>{
        var age_id = this.state.curr_id;
        var bd_id = this.state.curr_bd_id;
        var count = this.state.bodyContent[bd_id-1].count;
        if(count>=3){ Alert.alert("Number of pieces cannot be more than 3"); }
        else{
        count = count+1;
        this.setState({bodyContent : 
            [
                ...this.state.bodyContent.slice(0,bd_id-1),
                Object.assign(this.state.bodyContent[bd_id-1],{"count":count}),
                ...this.state.bodyContent.slice(bd_id)
            ]
        });
        console.log(this.state.bodyContent);
        var cc = this.state.bodyContent;
        this.setState({pageContent:
            [
                ...this.state.pageContent.slice(0,age_id-1),
                Object.assign(this.state.pageContent[age_id-1], {"bodyContent" : 
                    //[...this.state.pageContent[age_id-1].bodyContent.slice(0, bd_id-1),
                    Object.assign(this.state.pageContent[age_id-1].bodyContent, cc),
                    //...this.state.pageContent[age_id-1].bodyContent.slice(bd_id)
                    //]
                    }),
                ...this.state.pageContent.slice(age_id)
            ]
        });
        console.log(this.state.pageContent[age_id-1].bodyContent);
    }
}

    modalOK = () =>{
        this.setState({modalVis : false});
        let x={}
        x['Header'] = this.state.header;
        x['ToBe'] = this.state.to_be;
        x['Actual'] = this.state.actual;
        x['id'] = this.state.pageContent[this.state.curr_id-1].bodyContent.length+1;
        console.log(x);
        console.log(this.state.bodyContent);
        var curr = this.state.curr_id;
        this.setState({pageContent :[
            ...this.state.pageContent.slice(0,curr-1),
            Object.assign(this.state.pageContent[curr-1], {"bodyContent" : [...this.state.pageContent[curr-1].bodyContent,x]}),
            ...this.state.pageContent.slice(curr)
        ] });
        //this.setState({bodyContent:[...this.state.bodyContent, x]})
        console.log(this.state.pageContent[curr-1].bodyContent);
        var a = this.state.pageContent[curr-1].bodyContent;
        this.setState({bodyContent : a});
    }


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

            /*
            CREATE TABLE IF NOT EXISTS MESCHART (
                AGE_ID TEXT,
                BC_ID TEXT,
                BC_HEADER TEXT,
                BC_TOBE TEXT,
                BC_ACTUAL TEXT,
                BC_COUNT TEXT
            )
            */
    showInspection = async () =>{
        let Table = await this.executeQuery("CREATE TABLE IF NOT EXISTS MESCHART (AGE_ID TEXT, BC_ID TEXT, BC_HEADER TEXT, BC_TOBE TEXT, BC_ACTUAL TEXT, BC_COUNT TEXT);",[]);
        console.log("Created  :"+Table);
        for(var i =0;i<this.state.pageContent.length;i++){
            var age_id = i+1;
            for(var j=0;j<this.state.pageContent[i].bodyContent.length;j++){
                var bc_id = this.state.pageContent[i].bodyContent[j].id;
                var bc_header = this.state.pageContent[i].bodyContent[j].Header;
                var bc_tobe = this.state.pageContent[i].bodyContent[j].ToBe;
                var bc_actual = this.state.pageContent[i].bodyContent[j].Actual;
                var bc_count = this.state.pageContent[i].bodyContent[j].count;
                console.log(age_id+" "+bc_id+" "+bc_header+" "+bc_tobe+" "+bc_actual+" "+bc_count);
                let singleInsert = await this.executeQuery("INSERT INTO MESCHART(AGE_ID, BC_ID, BC_HEADER, BC_TOBE, BC_ACTUAL, BC_COUNT) VALUES (?, ?, ?, ?, ?, ?);",[age_id, bc_id, bc_header, bc_tobe, bc_actual, bc_count]);
                console.log("INSERTED : "+Object.values(singleInsert))
            } 
        }
    }

    rightAction = (key) =>{
        console.log("right" + key.key);
        this.setState({curr_bd_id:key.key});
        //this.ZerothFunction();
    };
    leftAction = (key) => {
        console.log("left" + key.key);
        this.setState({curr_bd_id:key.key});
        //this.SecondFunction();
    }; 

    onSwipe = ({key, value}) => {
        console.log(key);
        this.setState({curr_bd_id:key});
    }

    renderHiddenItem = () =>{
        return(
            <View style={styles.scrrollView21}>
                    <TouchableOpacity onPress={this.SecondFunction}>
                        <View style={styles.c2}>
                            <Text style={{fontSize: 25, color: 'white', alignSelf:'center'}}>+1/4</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.FirstFunction}>
                        <View style={styles.c1}>
                            <Icon name="camera" color='#ffffff' style={{alignSelf:'center', marginBottom:5, fontSize:18}}></Icon>
                            <Text style={{color:'white', alignSelf:'center'}}>CAPTURE</Text>
                            <Text style={{color:'white', alignSelf:'center'}}>DEFECT</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.ThirdFunction}>
                        <View style={styles.c3}>
                            <Icon name="check-circle-o" color='#ffffff' style={{alignSelf:'center', marginBottom:5, fontSize:20}}></Icon>
                            <Text style={{color:'white', alignSelf:'center'}}>MATCH</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.FirstFunction}>
                        <View style={styles.c1}>
                            <Icon name="camera" color='#ffffff' style={{alignSelf:'center', marginBottom:5, fontSize:18}}></Icon>
                            <Text style={{color:'white', alignSelf:'center'}}>CAPTURE</Text>
                            <Text style={{color:'white', alignSelf:'center'}}>DEFECT</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.ZerothFunction}>
                        <View style={styles.c2}>
                        <Text style={{fontSize: 25, color: 'white', alignSelf:'center'}}>-1/4</Text>
                        </View>
                    </TouchableOpacity>
                   
            </View>

        )
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
                <ScrollView style={styles.scrrollView1} horizontal={true}>
                    {
                        this.state.pageContent.map((item, index) => (
                            <TouchableHighlight key = {item.id} onPress={()=>{this.selectAge(item.age, item.id)}} activeOpacity={0.6} underlayColor='#C8C8C5'>
                            <View style={styles.scrroll1}>
                                <Text style={{fontWeight:'bold', fontSize:18}}>{item.age}</Text>
                            </View>
                            </TouchableHighlight>
                        ))
                    }
                </ScrollView>
                
                <View style={styles.scrrollView3}>
                    
                    <SwipeListView
                    data={this.state.bodyContent}
                    keyExtractor={(item) => item.id}
                    leftOpenValue={235}
                    rightOpenValue={-230}
                    swipeToOpenPercent={30}
                    previewOpenDelay={3000}
                    leftActivationValue={235}
                    rightActivationValue={-230}
                    onLeftActionStatusChange = {this.leftAction}
                    onRightActionStatusChange = {this.rightAction}
                    //onSwipeValueChange={this.onSwipe}
                    renderHiddenItem = {this.renderHiddenItem} 
                    renderItem = {({item}) =>    (
                        
                        <TouchableOpacity  onPress={()=>{this.select_bodyContent(item.id)}} style={styles.scrrollView3Items}>       
                            <Text style={{fontWeight:'bold', fontSize:18}}>{item.Header} - {item.count} Piece</Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text>To Be  </Text>
                                        <Text style={{fontWeight:'bold'}}>{item.ToBe}(+-1/2)</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                    <Text>Actual  </Text>     
                                    <Text>{item.Actual}</Text>
                                    </View>
                                </View>
                        </TouchableOpacity>    
                                
                    )
                    
                   }
                   />
                   <TouchableOpacity onPress={this.addNew} style={{alignItems: 'center', marginTop:10}}>
                       <View style={styles.buttonFoot}>
                           <Icon name="plus-square" style={{paddingTop:8, fontSize: 20, color:'white'}}></Icon>
                           <Text style={{fontSize: 20, color: 'white', paddingLeft:10}}>Measure New Piece</Text>
                       </View>
                   </TouchableOpacity>
                   </View>
                   
                
            </View>
            <View style={styles.footerContainer}>
		        <Icon.Button
                    name="comment"
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                    onPress={this.showQAComment}
                >
                <Text style={styles.footerText}>QA Comment</Text>
                </Icon.Button>
                <Icon.Button
                    name="bars"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                    onPress={this.showMesChart}
                >
                <Text style={styles.footerText}>Mes Chart</Text>
                </Icon.Button>
                <Icon.Button
                    name="search"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                    onPress={this.showInspection}
                >
                <Text style=
                 {styles.footerText}>Inspection</Text>
                </Icon.Button>
                <Icon.Button
                    name="save"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                    onPress={this.showSave}
                >
                <Text style={styles.footerText}>Save</Text>
                </Icon.Button>
                <Icon.Button
                    name="bars"  
	                color="#a9a9a9"
	                style={styles.iconButtonSend}
                    onPress={this.showMore}
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
	height:70,
	flexDirection: 'row',
	justifyContent: 'space-between',
	borderBottomColor: '#d3d3d3',
    borderBottomWidth: 2,
    paddingTop: 15,
    paddingBottom:10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  statusInspection:{
    backgroundColor: '#fff',
    height:110,
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
        paddingTop:10,
        paddingBottom:10,
        backgroundColor: 'white',
    },
    scrroll1:{
        borderRadius: 5,
        paddingLeft:5,
        paddingRight: 5, 
    },
    scrrollView2:{
        marginTop:5,
        marginBottom:5,
        marginRight:5,
        marginLeft:5,
        paddingTop:5,
        paddingBottom:5,
    },
    scrrollView21:{
        flexDirection: 'row',
    },
    scrrollView3:{
        paddingTop: 10,
        paddingBottom:10,
        height:450,
        backgroundColor: 'white',
        marginTop: 15,
        marginBottom: 15,
    },
    c1:{
        height:80,
        width:80,
        backgroundColor: '#3ABEE5',
        justifyContent: 'center',
    },
    c2:{
        height:80,
        width:80,
        backgroundColor: '#FFA21C',
        justifyContent: 'center'
    },
    c3:{
        height:80,
        width:80,
        backgroundColor: '#61E723',
        justifyContent: 'center',
    },
    c4:{
        height:80,
        width:80,
        backgroundColor: 'white',
    },
    scrrollView3Items:{
        backgroundColor:'white',
        marginBottom:3,
        paddingTop:5,
        paddingLeft:15,
        height:80,
        borderWidth: 0.7,
        marginBottom: 8,
    },  
    buttonFoot: {
        flexDirection:'row', 
        justifyContent:'center', 
        backgroundColor:"#3ABEE5", 
        width:250, 
        height:50,
        marginBottom:10,
        paddingTop:5,
        borderRadius: 10,
    },
    mod: {
        marginTop:200,
        marginLeft: 50,
        marginBottom:200,
        borderRadius: 20,
        width: 300,
        backgroundColor: "#D0D0CE",
        alignItems: "center",
        paddingTop: 20
      },
      txtMod: {
        fontSize: 18,
        fontWeight: "bold"
      },
      inputMod: {
          backgroundColor: "white",
          borderWidth: 0.5,
          borderColor: '#777',
          width: 200,
          height: 40,
          borderRadius: 10,
          marginTop:10,
    
      },
      modFooter: {
        marginBottom: 0,
        marginTop:30,
        flexDirection : 'row',
        justifyContent : 'center',
        borderTopWidth : 1,
      },
      modFooterSub: {
        borderTopWidth: 1,
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        justifyContent: "center",
        alignItems: "center",
        width: 145,
      },
      modFooterTxt: {
          paddingTop: 5,
          color: "#3474F4",
          fontSize: 18,
          fontWeight: "bold",
      }
});