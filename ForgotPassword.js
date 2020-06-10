import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    Button,
    Dimensions,
    Image,
    Platform,



} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

const {width,height}=Dimensions.get("window");
import styles from './forgotpwdstyle'
export default class ForgotPassword extends Component {
    render() {
        return (

            <View style={styles.mainContainer}>
               <Image style={styles.imgback} source={require('./Images/yoga.jpg')} blurRadius={5}></Image>
               <View style={styles.logoView}>
                   <Text style={styles.logotext}>Shiv Yog</Text>
               </View>
               <View style={styles.textContainer}><Text style={styles.textSize}>Reset Password</Text></View>
                <View style={styles.ViewContainer}>
                    <View style={styles.InputView}>
                        <Image source={require('./Images/pwd.png')} style={styles.img}></Image>
                        <TextInput placeholder="Email" style={styles.inputText} placeholderTextColor={"white"}></TextInput>
                    </View>
                    <View style={styles.btnView}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('VerifyCode')}>
                            <View style={styles.btnInnerView}>
                                <Text style={styles.btnText}>Send</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>

        )
    }
}

