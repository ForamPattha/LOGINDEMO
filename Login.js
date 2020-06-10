import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    Platform,
    Alert,
    SafeAreaView,
    AsyncStorage,


} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';


const WHITE = "#ffffff";
const POLICY = "By signing up.you agree to the Terms of Service and Privacy Policy";
const { width, height } = Dimensions.get("window");
export default class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={uname:'',pwd:''};
    }

    // CheckLogin()
    // {
    //     if(this.state.uname=="admin" && this.state.pwd=="admin")
    //     {   
    //             this.props.navigation.navigate('Home',{UserName:this.state.uname})
    //     }
    //     else{
    //         alert('Invalid UserName or Password');
    //     }
    // }
    gotoNext() {
       // alert("hello")
        
        this.props.navigation.navigate('ForgotPassword')
    }
   
    render() {
        return (

            <View style={styles.mainContainer}>
               
                <Image style={styles.imgback} source={require('./Images/yoga.jpg')} blurRadius={5}></Image>
            <KeyboardAwareScrollView>
                <View style={styles.textContainer}>
                    <Text style={styles.logoText}>Login Here</Text>
                </View>
               
                <View style={{ alignItems: "center",paddingLeft:width*0.2,paddingRight:width*0.2}}>
                    <View style={styles.userView}>
                        <Image style={styles.imgInput} source={require("./Images/manuser.png")}></Image>
                        <TextInput style={styles.userText} placeholder="Username" placeholderTextColor={"white"} onChangeText={(uname)=>{this.setState({uname})}}></TextInput>
                    </View>
                    <View style={styles.keyView}>
                        <Image style={styles.imgInput} source={require("./Images/lock1.png")}></Image>
                        <TextInput style={styles.keyText} placeholder="Password" placeholderTextColor={"white"} onChangeText={(pwd)=>{this.setState({pwd})}}></TextInput>
                    </View> 
                 </View>   
                    <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => this.gotoNext()}>
                        <Text style={{ fontSize: 18, color: WHITE, marginRight: 25 }} >Forgot your password?</Text>
                    </TouchableOpacity>
                    <View style={{ alignSelf: "center", padding: 30 }}>
                        <TouchableOpacity onPress={()=>{//AsyncStorage.setItem('userToken','Foram');
                             this.props.navigation.navigate('App')}}>
                            <View style={styles.signInButton}>
                                <Text style={{ fontSize: 25, textAlign: "center", padding: 5 }}>Sign In</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.leftline} />
                        <Text style={{ alignSelf: 'center', paddingHorizontal: 10, fontSize: 20, color: WHITE }}>SIGN IN WITH</Text>
                        <View style={styles.rightLine} />
                    </View>
                    <View style={{ alignSelf: "center", padding:width*0.1, flexDirection: "row" }}>
                        <TouchableOpacity>
                            <View style={styles.googlebtn}>
                                <Text style={styles.btnText}>Google</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.facebtn}>
                                <Text style={styles.btnText}>Facebook</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexWrap: "wrap", flexDirection: "row", padding: 25 }}>
                        <Text style={{ textAlign: "center", color: WHITE, fontSize: 15 }}>{POLICY}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.leftline} />
                        <Text style={{ alignSelf: 'center', paddingHorizontal: 10, fontSize: 20, color: WHITE }}>DON'T HAVE AN ACCOUNT</Text>
                        <View style={styles.rightLine} />
                    </View>
                    <View style={{ alignSelf: "center", padding: 30 }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('SignUp')}>
                            <View style={styles.signUpButton}>
                                <Text style={{ fontSize: 25, textAlign: "center", padding: 5 }}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                {/* </View> */}
                </KeyboardAwareScrollView>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
       
    },
    imgback: {
        width: width,
        height: height,
        position: "absolute",

    },
    textContainer: {
        justifyContent: "center",
        padding:height*0.1,
    },
    logoText: {
        textAlign: "center",
        fontSize: 40,
        color: "#990000",
        
    },  
    imgInput:{
        width: 20, 
        height: 20,
        alignSelf:"center" 
    },
    userView: {
        flexDirection: "row",
        width: width - 60,
        borderBottomColor: WHITE,
        borderBottomWidth: 1,
       
    },
    userText: {
        fontSize: 20,
        marginLeft: Platform.OS == "android" ? 5 : 15,
        color: WHITE,
        marginBottom: Platform.OS == "android" ? 2 : 5,
       
    },
    keyView: {
        flexDirection: "row",
        width: width - 60,
        borderBottomColor: WHITE,
        borderBottomWidth: 1,
        //padding: 3,
        marginTop: Platform.OS == "android" ? 5 : 10,
    },
    keyText: {
        fontSize: 20,
        marginLeft: Platform.OS == "android" ? 5 : 15,
        color: WHITE,
        marginBottom: Platform.OS == "android" ? 2 : 5,

    },
    signInButton: {
        backgroundColor: WHITE,
        width: width - 50,
        borderRadius: 20,
    },
    leftline: {
        backgroundColor: WHITE,
        height: 2,
        flex: 1,
        alignSelf: 'center',
        marginLeft: 30,
    },
    rightLine: {
        backgroundColor: WHITE,
        height: 2,
        flex: 1,
        alignSelf: 'center',
        marginRight: 30,
    },
    googlebtn: {
        backgroundColor: "#cc3300",
        width: width*0.4,
        borderRadius: 20,
    },
    facebtn: {
        backgroundColor: "#005ce6",
        width: width*0.4,
        borderRadius: 20,
        marginLeft: 5
    },
    btnText: {
        fontSize: 25,
        textAlign: "center",
        padding: 5,
        color: WHITE
    },
    signUpButton: {
        backgroundColor: WHITE,
        width: width - 40,
        borderRadius: 30,
        height: 50,
        padding: 5
    },
})