import React,{Component} from 'react';
import {StyleSheet,Dimensions} from 'react-native';

const WHITE="#ffffff";
const {width,height}=Dimensions.get("window");
 export default StyleSheet.create({
    mainContainer:{
        flex:1,
    },
    imgback:{
           width:width,
           height:height,
           position:"absolute", 
          
    },
    logoView: {
        padding: width * 0.3,
        justifyContent: "center",
        
    },
    logotext: {
        color: "#990000",
        textAlign: "center",
        fontSize: 40,
        fontFamily: "Cochin"
    },
    textContainer:{
        alignSelf:"center",
        padding:width*0.2,
        justifyContent:"flex-start",
        width:width-40,
        top:1,

    },
    textSize:{
        fontSize:25,
        textAlign:"center",
        color:"white"

    },
    ViewContainer:{
        //paddingLeft:width*0.1,
        //paddingRight:width*0.1,
        //justifyContent:"center",
        bottom:1,
        position:"absolute",
        width:width-40,
        alignSelf:"center"
        
        
    },
    InputView:{
        flexDirection:"row",
        borderBottomColor:WHITE,
        borderBottomWidth:1,
        width:width-40,
        marginBottom:20
    },
    img:{
        width:20,
        height:20,
        alignSelf:"center",
    },
    inputText:{
        padding:width*0.1/5,
        fontSize:20
    },
    btnView:{
        padding:5,
        width:width-30,      
        marginBottom:30
        
    },
    btnInnerView:{
        backgroundColor:WHITE,
        borderRadius:30,
    },
    btnText:{
        fontSize:20,
        textAlign:"center",
        padding:width*0.1/5,
    },

})