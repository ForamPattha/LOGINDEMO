import  React,{Component} from 'react';
import {View,Modal,Text,StyleSheet} from 'react-native';


const DisplayMemberShip=(props)=>(
    <View style={styles.container}>
   <Modal visible={props.display} animationType="fade"  onRequestClose={() => this.closeModal()}>
   
            <Text>Hello</Text>
       
    </Modal>
    </View>
)

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
    }
})

export default DisplayMemberShip;