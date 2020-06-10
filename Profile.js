import React,{Component} from 'react';
import {View,Text,StyleSheet, ImageBackground,Switch ,Dimensions, Image,FlatList} from 'react-native';
import  SegmentedControlTab from 'react-native-segmented-control-tab';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import * as Data from './Data';
export default class Community extends Component{
    constructor() {
        super();
        this.state = {
          selectedIndex: 0
        };
      }
     
      handleIndexChange = (index) => {
        this.setState({
          ...this.state,
          selectedIndex: index
        });
      };
      _keyExtractor = (item, index) => item.id;

      _renderItem = ({ item, index }) => {
        //console.log("item", item)
        return (
            <View needsOffscreenAlphaCompositing style={styles.renderView}>
                 <Image source={require('./Images/meditation.png')} style={styles.renderimg}></Image> 
                <Text style={styles.rendertxt}>{item.activity}</Text >
            </View >

        )};
        
        _renderfavriteItem=({item,index})=>{
            return(
                <View style={{flexDirection:"row",borderBottomColor:"white",borderBottomWidth:1,padding:10,alignItems:"center"}}>
                    <Image source={require ('./Images/like.png')} style={{width:20,height:20}}></Image>
                    <Text style={{fontSize:20,paddingLeft:5,color:'white',}}>{item.fav}</Text>
                </View>
        )};

        _grpKey=(item,index)=>{
            item.id;
        }
        _grprenderItem=({index,item})=>{
            return(
                <View style={{flexDirection:"row",borderBottomColor:"white",borderBottomWidth:1,padding:10,alignItems:"center"}}>
                    <Image source={require ('./Images/grpman.png')} style={{width:30,height:30}}></Image>
                    <Text style={{fontSize:20,paddingLeft:5,color:'white',}}>{item.grp}</Text>
                </View>
            )
        }
        state={
            switchValue:false,
        }

    render(){
        return(
            <View style={styles.container}>
                <Image source={require ('./Images/yoga.jpg')} style={styles.imgback} blurRadius={5}></Image>
                <View style={{alignItems:"center",paddingTop:width*0.1}}>
                    <Image source={require ('./Images/user.png')} style={styles.roundImg}></Image>
                    <Text style={{padding:width*0.1/5,fontSize:20}}>Jone Doe</Text>
                    <Text>Member Since Apr. 2008</Text>
                </View>
               <View style={{paddingTop:width*0.1/2}}>
                   <SegmentedControlTab values={["Profile","Activity","Favourites","Groups"]}
                    selectedIndex={this.state.selectedIndex}
                    onTabPress={this.handleIndexChange}
                    tabTextStyle={{fontSize:20}}>

                   </SegmentedControlTab>
               </View>
              
               <View>
                    {this.state.selectedIndex == 0 ?
                        <View style={styles.tabMainView}>
                            <Text style={{color:"white"}}>FirstName </Text>
                            <View style={styles.tabContainView}><Text style={styles.tabContainerText}>Jone Doe</Text></View>
                            <Text style={{paddingTop:width*0.1/2,color:"white"}}>Email </Text>
                            <View style={styles.tabContainView}><Text style={styles.tabContainerText}>JoneDoe@gmail.com</Text></View>
                            <Text style={{paddingTop:width*0.1/2,color:"white"}}>Password </Text>
                            <View style={styles.tabContainView}>
                                <Text style={styles.tabContainerText}>***********</Text>
                                <TouchableOpacity>
                                    <View style={{alignSelf:"center",marginRight:5}}>
                                        <Text style={{color:"white",fontSize:20}}> > </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{paddingTop:width*0.1/5,flexDirection:"row",justifyContent:"space-between"}}>
                                <Text style={{color:"white"}}>Manage Your subscription</Text>
                                <TouchableOpacity style={{alignSelf:"center",marginRight:10}}>
                                    <View>
                                        <Text style={{color:"white",fontSize:20}}>></Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View> : undefined}
                    {this.state.selectedIndex == 1 ?
                        <ScrollView>    
                        <View style={{flex:1,marginBottom:270}}>
                                                 
                             <FlatList
                                scrollEnabled={false}
                                data={Data.ActivityData}
                                keyExtractor={this._keyExtractor}
                                renderItem={this._renderItem} style={styles.flatstyle}>
                                       
                           </FlatList>
                           <View style={styles.bottomView}> 
                                <Text style={{fontSize:15,alignSelf:"center",paddingLeft:5}}>Let my friends see my details & activity</Text>
                                <Switch onValueChange={(switchValue)=>{this.setState({switchValue})}} 
                                value={this.state.switchValue} style={{alignSelf:"center"}}></Switch>
                            </View>
                          
                          
                        </View>
                        </ScrollView>
                         : undefined}

                    {this.state.selectedIndex == 2 ?
                        <View style={styles.tabMainView}>
                          <FlatList
                            data={Data.FavouritesData}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderfavriteItem}
                            scrollEnabled={false}>

                          </FlatList>
                          <TouchableOpacity style={{paddingTop:20,alignItems:"center"}}>
                              <View style={{backgroundColor:"white",width:width-20,padding:5,borderRadius:20,height:40}}>
                                  <Text style={{alignSelf:"center",fontSize:20}}>Share Shiv Yog with Friends</Text>
                              </View>
                          </TouchableOpacity>
                        </View> : undefined}
                    {this.state.selectedIndex == 3 ?
                        <View>
                           <FlatList
                            data={Data.GrpData}
                            keyExtractor={this._grpKey}
                            renderItem={this._grprenderItem} 
                            scrollEnabled={false}>

                           </FlatList>
                           <TouchableOpacity style={{paddingTop:20,alignItems:"center"}}>
                              <View style={{backgroundColor:"white",width:width-20,padding:5,borderRadius:20,height:40}}>
                                  <Text style={{alignSelf:"center",fontSize:20}}>Create a group meditation</Text>
                              </View>
                          </TouchableOpacity>
                        </View>

                    : undefined}    
                </View>

             
            </View>
        )
    }
}

const{width,height}=Dimensions.get("window");

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    imgback:{
        width:width,
        height:height,
        position:"absolute",
    },
    roundImg:{
        width:110,
        height:110,
        borderRadius:200/2,
        borderWidth:1,
    },
    tabContainView:{
        borderBottomColor:"white",
        borderBottomWidth:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    tabContainerText:{
        fontSize:20,
        paddingBottom:width*0.1/5,
        color:'white',
    },
    tabMainView:{
        width:width,
        //padding:width*0.1/5
    },
    renderView: {
        borderBottomWidth: 2,
        borderColor: '#D9E7F6',
        flexDirection:"row",
        padding:width*0.1/2,
        width:width,
    },
    rendertxt: {
        fontSize: 18,
        paddingLeft:width*0.1/5,
        width:(width-40)/1.2,
        color:'white',
    },
    renderimg: {
        width:30,
        height:30,
        padding:width*0.1/5,
       
    },
    flatstyle: {
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 95,
       
    },



    bottomView:{
        position:"absolute",
        bottom:0,
        backgroundColor:"#efeff5",
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:3,
        width:width,
       // marginTop:20,
    },
})