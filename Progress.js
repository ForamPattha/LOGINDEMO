import React,{Component} from 'react';
import {View,Text,StyleSheet,ImageBackground, Dimensions,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Data from './Data';


export default class Community extends Component{

    _keyExtrator=(index,item)=>item.id;
    _renderItem=({index,item})=>{
        return(
            <View style={styles.renderView}>
                <View style={{flexDirection:"row",width:width-40}}>
                    <Image source={require ('./Images/mark.png')} style={{width:20,height:20,padding:3}}></Image>
                    <Text style={{fontSize:20,width:(width-40)/1.9,paddingHorizontal:5}}>{item.name}</Text>
                </View>
                <View style={{justifyContent:"center",marginTop:10,marginHorizontal:20}}>
                    <Text>{item.details}</Text>
                </View>
                <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
                    <Image style={styles.iconStyle} source={require('./Images/thumbsup.png')}></Image>
                    <Image style={styles.iconStyle} source={require('./Images/sicon.png')}></Image>
                    <Image style={styles.iconStyle} source={require('./Images/facebook.png')}></Image>
                    <Image style={styles.iconStyle} source={require('./Images/google_plus.png')}></Image>   
                </View>
            </View>
            
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground source={require ('./Images/yoga.jpg')} style={{width:width,height:height}} blurRadius={5}>
                    <View style={{flexDirection:"row",alignSelf:"center",paddingTop:10,paddingVertical:10,height:130,width:width}}>
                        <View style={{backgroundColor:"#e0e0eb",opacity:0.5,width:(width-30)/3,paddingHorizontal:10,borderRadius:10,padding:10}}>
                            <Text style={{fontSize:20,textAlign:"center"}}>2 Courses opended</Text>
                        </View> 
                        <View style={{backgroundColor:"#e0e0eb",opacity:0.5,width:(width-30)/2.9,marginLeft:10,paddingHorizontal:20,borderRadius:10,padding:10}}>
                            <Text style={{fontSize:20,textAlign:"center"}}>7 Modules finished</Text>
                        </View> 
                        <View style={{backgroundColor:"#e0e0eb",opacity:0.5,width:(width-30)/3,marginLeft:10,paddingHorizontal:20,borderRadius:10,padding:10}}>
                            <Text style={{fontSize:20,textAlign:"center"}}>1.2 Hours trained</Text>
                        </View> 

                    </View>
                    <Text style={{alignSelf:"center",fontSize:15}}>Another complimentary message goes here!</Text>
                    <FlatList
                        data={Data.ProgressData}
                        keyExtractor={this._keyExtrator}
                        renderItem={this._renderItem}
                        style={{marginTop:10}}
                        contentContainerStyle={{paddingBottom:290}}
                    >

                    </FlatList>
                </ImageBackground>   
            </View>
        )
    }
}

const {height,width}=Dimensions.get("window");
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    renderView:{
        marginBottom:10,
        paddingHorizontal:20,
        justifyContent:"center",
        backgroundColor:"white",
        width:width-30,
        alignSelf:"center",
        borderRadius:5,
        paddingVertical:20
    },
    iconStyle: {
        width: 15,
        height: 15,
        margin:10,
    }
})