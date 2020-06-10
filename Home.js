import React,{Component} from 'react';
import {View, Text, Dimensions,Image,StyleSheet,ImageBackground} from 'react-native';
import { TouchableOpacity, FlatList, ScrollView } from 'react-native-gesture-handler';
import * as Data from './Data'; 



export default class Home extends Component{
      
        _KeyExtrator=(index,item)=>item.id;
        _renderItem=({item,index})=>{
            return(
               
                <View style={{height:height*0.1,backgroundColor:"#E6E4E4",paddingVertical:20,marginHorizontal:10,opacity:0.6}}>
                    <Text style={{width:(width-60)/3.5,textAlign:"center",fontSize:15,}}>{item.name}</Text>
                </View>
            
            )
        }
    
        render(){
            const {navigation}=this.props;
            const User_Name=navigation.getParam("UserName","Others")
            return(
                <View style={styles.container}>
                    <ImageBackground  source={require('./Images/yoga.jpg')} blurRadius={5} style={{width:width,height:height}}>
                        <View style={{width:width-20,justifyContent:"center",alignItems:"center",padding:width*0.1/2}}>
                        <Text style={{width:(width-20)/1.2,fontSize:20,textAlign:"center"}}>Welcome Back,John Doe!</Text>
                        <Text style={{width:(width-20)/1.2,textAlign:"center"}}>We are glad to see you again</Text>
                        </View>
                        <Text style={{padding:width*0.1/5,alignSelf:"center"}}>YOUR GOALS</Text>
                        <View style={{height:100}}>
                        <FlatList
                        data={Data.GoalData}
                        keyExtractor={this._KeyExtrator}
                        renderItem={this._renderItem} 
                        horizontal
                        style={{padding:2,alignSelf:"center"}} />
                        </View>   
                        <ScrollView>
                            <View style={{flex:1,marginBottom:280}}>
                            <View>
                                <ImageBackground source={require ('./Images/imgyoga.jpeg')} style={{width:width,height:200}} blurRadius={2}> 
                                    <View style={{flexDirection:'row',justifyContent:"space-between",padding:width*0.1/2}}>
                                        <Image source={require('./Images/heart.png')} style={{width:20,height:20}}></Image>
                                        <Text style={{color:"white",fontWeight:"bold",fontSize:20,alignContent:"flex-end",width:(width-40)/2.9,textAlign:"center"}}>100% Complete</Text>
                                    </View>
                                    <Text style={styles.textStyle}>Recommended for you</Text>
                                    <Text style={styles.smallTextStyle}>Detailed description</Text>

                                </ImageBackground>
                            </View>
                            <View style={{flexDirection:"row",flex:2}}>
                                <ImageBackground source={require ('./Images/wyoga.jpg')} style={{height:200,flex:1}}>
                                    <View style={{bottom:1,position:"absolute",paddingLeft:5,marginBottom:10}}>
                                        <Text style={styles.textStyle}>All Courses</Text>
                                        <Text style={styles.smallTextStyle}>2 accross 7 modules</Text>
                                    </View>
                                  
                                </ImageBackground>
                                <ImageBackground source={require ('./Images/singleyoga.jpg')} style={{height:200,flex:1}} >
                                <View style={styles.ViewTextStyle}>
                                        <Text style={styles.textStyle}>Newest Courses</Text>
                                        <Text style={styles.smallTextStyle}>2 accross 7 modules</Text>
                                </View>
                                </ImageBackground>
                            </View>
                            <View >
                                <ImageBackground source={require ('./Images/grpyoga.jpeg')} style={{height:200}}>
                                    <Image source={require ('./Images/heart.png')} style={{width:20,height:20,alignSelf:"flex-end",margin:10}}></Image>
                                    <View style={styles.ViewTextStyle}>
                                        <Text style={styles.textStyle}>Featured content</Text>
                                        <Text style={styles.smallTextStyle}>Detailed description</Text>
                                   </View>
                                </ImageBackground>
                            </View>

                            </View>
                        </ScrollView>
                    </ImageBackground>

                 
                </View>
            )
        }


}
const {width,height}=Dimensions.get("screen");
const styles=StyleSheet.create({
    container:
    {
      flex:1
    },
    imgBack:{
        width:width,
        height:height,
        //position:"absolute",
    },
    textStyle:{
        width:(width-40)/1.2,
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        paddingLeft:10
    },
    smallTextStyle:{
        color:"white",
        fontWeight:"bold",
        fontSize:15,
        paddingLeft:10,
        width:(width-40)/1.2
    },
    ViewTextStyle:{
        bottom:1,
        position:"absolute",
        paddingLeft:5,
        marginBottom:10
    }
})