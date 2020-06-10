import React,{ Component } from "react";
import {View,Image,FlatList, Dimensions,StyleSheet,Text, ImageBackground,TouchableWithoutFeedback} from 'react-native';
import * as Data from './Data';

export default class AfterSignUp extends Component{
   


   _keyExtrator=(item,index)=>{item.id};
   _renderItem=({item,index})=>{
       return(
           <TouchableWithoutFeedback onPress={()=>alert(item.name)}>
            <View style={styles.renderView}>
               <Image source={{uri:item.images}} style={styles.imageView}></Image>
               <Text style={styles.renderText}>
                   {item.name}
               </Text>
            </View>
           </TouchableWithoutFeedback>
           
       )
   }
   
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground style={styles.imgBack} source={require ('./Images/back.jpg')}>
                  
                    <FlatList
                        data={Data.SignUpData}
                        keyExtractor={this._keyExtrator}
                        renderItem={this._renderItem}
                        style={{marginTop:10}}
                        
                    />

                
                </ImageBackground>
               
            </View>
        )
    }
}

const {width,height}=Dimensions.get("screen");
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    imgBack:{
        width:width,
        height:height,

    },
    renderView:{
        backgroundColor:"white",
        borderRadius:10,
        marginBottom:10,
        height:170,
        width:width-40,
        alignSelf:"center"

    },
    renderText:{
        color:"white",
        width:(width-40)/2.9,
        alignSelf:"flex-start",
        fontSize:20,
        paddingVertical:20,
        fontWeight:"bold",
        marginLeft:37,
        marginTop:37
    },
    imageView: {
        width: width-40,
        height: 170 ,
        
        position:"absolute",
        borderRadius:10,
    },
});