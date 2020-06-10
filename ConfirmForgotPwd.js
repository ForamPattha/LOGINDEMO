import React,{Component} from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import styles from './forgotpwdstyle';

export default class ConfirmForgotPwd extends Component
{
    render()
    {
        return(
            <View style={styles.mainContainer}>
            <Image style={styles.imgback} source={require('./Images/yoga.jpg')} blurRadius={5}></Image>
            <View style={styles.logoView}>
                <Text style={styles.logotext}>Shiv Yog</Text>
            </View>
            <View style={styles.textContainer}><Text style={styles.textSize}>Verify the code</Text></View>
             <View style={styles.ViewContainer}>
                 <View style={styles.InputView}>
                     <Image source={require('./Images/key.png')} style={styles.img}></Image>
                     <TextInput placeholder="New Password(8 character or More)" style={styles.inputText} placeholderTextColor={"white"}></TextInput>
                 </View>
                 <View style={styles.InputView}>
                     <Image source={require('./Images/verified.png')} style={styles.img}></Image>
                     <TextInput placeholder="Confirm" style={styles.inputText} placeholderTextColor={"white"}></TextInput>
                 </View>
                 <View style={styles.btnView}>
                     <TouchableOpacity onPress={()=>this.props.navigation.navigate('Login')}>
                         <View style={styles.btnInnerView}>
                             <Text style={styles.btnText}>Confirm</Text>
                         </View>
                     </TouchableOpacity>
                 </View>
             </View>
         </View>
        )
    }
}