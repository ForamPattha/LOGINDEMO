import React, {Component} from 'react';
import {View,
   Text,
   Dimensions,
   StyleSheet,
   AsyncStorage,

} from 'react-native';

export default class Splash extends Component{
    static navigationOptions = {
        header: null,
    }
    constructor(props){
        super(props);
       // this.props.navigation.navigate(AsyncStorage.getItem('userToken')?'App':'Auth')
    }
    async UNSAFE_componentWillMount() {
        setTimeout(() => {
            this.props.navigation.push('Auth')
        }, 2000)
    }

    
    render() {
        return (
            <View style={styles.container}>
                <Text style={{textAlign:"center",marginTop:100,fontSize:20,color:"#ffffff"}}> Welcome To Shiv Yog</Text>
            </View>

        )
    }


}
const {width,height}=Dimensions.get("window")
const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#000000"
    },
})