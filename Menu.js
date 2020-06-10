import React,{Component} from 'react';
import {View,StyleSheet,Image,Text, Dimensions, SafeAreaView,TouchableOpacity} from 'react-native';
import { ScrollView} from 'react-native-gesture-handler';


export default class Menu extends Component{
    
    onSelect(way)
    {
        this.props.navigation.closeDrawer();
        this.props.navigation.navigate(way);
        console.log('click');
    }
    
    render(){
        return(
            
             <View style={styles.mainContainer}>
                 <View style={{padding:width*0.1/5,backgroundColor:"#666666",marginTop:50,opacity:1}}>
                     <Image style={styles.imgRound} source={require('./Images/user.png')}></Image>
                     <Text style={{fontSize:20,textAlign:"center",paddingTop:width*0.1/2,color:"white"}}>Welcome back,Jone Doe</Text>   
                     <Text style={{fontSize:15,textAlign:"center",color:"white",paddingTop:width*0.1/5}}>Member Since 2018</Text>
                 </View>
                <ScrollView style={{backgroundColor:"#BDBDBD",paddingLeft:width*0.1/2,paddingTop:width*0.1,opacity:0.52}}>
                    <View style={{marginBottom:280}}>
                 
                    <TouchableOpacity onPress={()=>this.onSelect('CommunityStack')}>
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/community.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Community</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>this.onSelect('ReminderStack')}>
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/reminder.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Daily Reminder</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onSelect('FriendStack')}>
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/friends.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Friends</Text>
                    </View>
                    </TouchableOpacity>
                   
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/group.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Group Sessions</Text>
                    </View>
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/settings.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Help</Text>
                    </View>
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/help.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Settings</Text>
                    </View>
                    <View style={styles.imgView}>
                        <Image source={require ('./Images/share.png')} style={styles.img}></Image>
                        <Text style={styles.Imgtext}>Share</Text>
                    </View>
                    </View>
                </ScrollView>
                <View style={{padding:width*0.1,backgroundColor:"#585858",}}>
                    <Text style={{textAlign:"center",color:"white",fontSize:20,marginBottom:10}}>ShivYog Mindfulness V1.0</Text>
                </View>
             </View>
           
        )
    }


}
const {width,height}=Dimensions.get("window");
const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:"#666666"
    },
    imgRound:{
        height:120,
        width:120,
        borderRadius:300/2,
        alignSelf:"center",
       borderColor:"white",
       borderWidth:2,
       overflow:"hidden"
    },
    imgView:{
        flexDirection:"row",
       paddingBottom:width*0.1/5,
    },
    img:{
        width:30,
        height:30,
    },
    Imgtext:{
        fontSize:20,
        color:'white',
        padding:5,
    },

})
