import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    Image,

} from 'react-native';
import DisplayMemberShip from './DisplayMemberShip';


const WHITE = "#ffffff";
const POLICY="By signing up.you agree to the Terms of Service and Privacy Policy";
export default class SignUp extends Component {

    state={
        display:false,
    }    
    trigerModal(){
        this.setState(prevState=>{
            return{
                display:true
            }
        });
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <Image style={styles.imgback} source={require('./Images/yoga.jpg')} blurRadius={5}></Image>
                <ScrollView>
                    <View style={styles.logoView}>
                        <Text style={styles.logotext}>Shiv Yog</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <View style={styles.ViewStyle}>
                            <Image source={require("./Images/manuser.png")} style={styles.ImgStyle}></Image>
                            <TextInput placeholder="Username" style={styles.TextStyle} placeholderTextColor={"white"}></TextInput>
                        </View>
                        <View style={styles.ViewStyle}>
                            <Image source={require("./Images/pwd.png")} style={styles.ImgStyle}></Image>
                            <TextInput placeholder="Email" style={styles.TextStyle} placeholderTextColor={"white"}></TextInput>
                        </View>
                        <View style={styles.ViewStyle}>
                            <Image source={require("./Images/lock1.png")} style={styles.ImgStyle}></Image>
                            <TextInput placeholder="Password" style={styles.TextStyle} placeholderTextColor={"white"}></TextInput>
                        </View>
                    </View>
                    <View style={styles.btnSignUp}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AfterSignUp')}>
                            <View style={styles.btnView}>
                                <Text style={styles.btnText}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.leftline}></View>
                        <Text style={styles.lineTextStyle}>SIGN UP WITH </Text>
                        <View style={styles.rightline}></View>
                    </View>
                    <View style={{flexDirection:"row",padding:width*0.1}}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AfterSignUp')}>
                            <View style={{backgroundColor:"#cc3300",borderRadius:20,width:width*0.4,padding:5,marginRight:3}}>
                                <Text style={{color:WHITE,textAlign:"center",fontSize:20,padding:5}}>Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AfterSignUp')}>
                            <View style={{backgroundColor:"#005ce6",borderRadius:20,width:width*0.4,padding:5,marginLeft:3}}>
                                <Text style={{color:WHITE,textAlign:"center",fontSize:20,padding:5}}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{padding:25,flexWrap:"wrap",flexDirection:"row"}}>
                        <Text style={{textAlign:"center",color:WHITE,fontWeight:"bold",fontSize:15}}>{POLICY}</Text>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={styles.leftline}></View>
                        <Text style={styles.lineTextStyle}>ALREADY HAVE AN ACCOUNT</Text>
                        <View style={styles.rightline}></View>
                    </View>
                    <View style={styles.btnSignUp}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                            <View style={styles.btnView}>
                                <Text style={styles.btnText}> Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row"}}>
                        <View style={styles.leftline}></View>
                        <Text style={styles.lineTextStyle}>BENEFITS OF MEMBERSHIP </Text>
                        <View style={styles.rightline}></View>
                    </View>
                    <View style={styles.btnSignUp}>
                        <TouchableOpacity onPress={()=>this.trigerModal()}>
                            <View style={styles.btnView}>
                                <Text style={styles.btnText}> Membership</Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={{textAlign:"center",color:WHITE,fontSize:20,marginBottom:width*0.1-5}}>Try it for free</Text>
                    </View>
                    <DisplayMemberShip
                    display = { this.state.display }/>
                </ScrollView>


            </View>
        )
    }

}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

    },
    imgback: {
        width: width,
        height: height,
        position: "absolute",
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
    inputContainer: {
        paddingLeft: width * 0.1,
        paddingRight: width * 0.1,

    },
    ViewStyle: {
        flexDirection: "row",
        borderBottomColor: WHITE,
        borderBottomWidth: 1,
        paddingBottom: 10,
        paddingTop: 10,
        color: WHITE
    },
    ImgStyle: {
        width: 20,
        height: 20,
        alignSelf: "center",
    },
    TextStyle: {
        textAlign: "center",
        fontSize: 20,
        padding: 5,
        color: WHITE,
        fontWeight: "bold",
    },
    btnSignUp: {

        padding: width * 0.1 - 5,
        alignSelf: "center",
        width: width - 10
    },
    leftline: {
        backgroundColor: WHITE,
        height: 2,
        flex: 1,
        alignSelf: 'center',
        marginLeft: width*0.1,

    },
    rightline: {
        backgroundColor: WHITE,
        height: 2,
        flex: 1,
        alignSelf: 'center',
        marginRight: width*0.1,
    },
    lineTextStyle:{
        alignSelf: 'center', 
        paddingHorizontal: 10, 
        fontSize: 20, 
        color: WHITE ,
        textAlign:"center"
    },

    btnView:{
        backgroundColor: WHITE, 
        borderRadius: 30, 
        height: width * 0.1 + 5 ,
    },
    btnText:{
        fontSize: 30, 
        alignSelf: "center",
    }
})