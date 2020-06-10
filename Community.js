import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import * as Data from './Data';
import { FlatList, ScrollView } from 'react-native-gesture-handler';


const { width, height } = Dimensions.get("window");
export default class Community extends React.Component {

    _keyExtrator = (item, index) => { item.id };
    _renderKey = ({ item }) => {
        return (
             <View style={styles.renderView}>
                 <View style={{ flexDirection: 'row', width: width - 40, marginBottom: 7 }}>
                     <Image source={require('./Images/user.png')} style={styles.imgRound}></Image>
                     <Text style={{ fontSize: 20, paddingHorizontal: 5, width: (width - 40) / 1.2 }}>{item.name}</Text>
                 </View>
                <Text style={{ marginLeft: 36 }}>{item.details}</Text>
                 <View style={{ flexDirection: 'row', width: width - 40,justifyContent: 'space-between' }}>
                     <Text style={{marginLeft:36}}>1 min ago</Text>
                     <View style={{ flexDirection: 'row',width:width-170,justifyContent:"flex-end"}}>
                         <Image style={styles.iconStyle} source={require('./Images/thumbsup.png')}></Image>
                         <Image style={styles.iconStyle} source={require('./Images/sicon.png')}></Image>
                         <Image style={styles.iconStyle} source={require('./Images/facebook.png')}></Image>
                         <Image style={styles.iconStyle} source={require('./Images/google_plus.png')}></Image>
                 </View>
                 </View>

                {/* <View style={{ padding: 5 }}>
                    <Image source={require('./Images/user.png')} style={styles.imgRound}></Image>
                </View>
                <View style={{ flexDirection: "column", alignSelf: "center", padding: 5 }}>
                    <Text style={{ fontSize: 20, paddingBottom: 5 }}>{item.name}</Text>
                    <Text style={{ width: width / 2 }}>{item.details}</Text>
                    <View style={{ flexDirection: "row", marginTop: 5, justifyContent: "space-between" }}>
                        <Text>1 Minute ago</Text>
                        <Image style={styles.iconStyle} source={require('./Images/thumbsup.png')}></Image>
                        <Image style={styles.iconStyle} source={require('./Images/sicon.png')}></Image>
                        <Image style={styles.iconStyle} source={require('./Images/facebook.png')}></Image>
                        <Image style={styles.iconStyle} source={require('./Images/google_plus.png')}></Image>

                    </View>
                </View> */}


            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('./Images/yoga.jpg')} style={{ width: width, height: height, }} blurRadius={5}>
                   
                    <FlatList
                        data={Data.CommunityData}
                        keyExtractor={this._keyExtrator}
                        renderItem={this._renderKey}
                        style={{ paddingTop: 10 }}/>

                   
                 

                </ImageBackground>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imgRound: {
        width: 30,
        height: 30,
        borderRadius: 300 / 2,
        borderColor: "black",
        borderWidth: 1,
        marginRight: 10
    },
    renderView: {
        backgroundColor: 'white',
        padding: 5,
        width: width - 30,
        marginBottom: 10,
        paddingVertical: 20,
        alignSelf: "center",
        borderRadius: 10,
        justifyContent: 'center',
       

    },
    iconStyle: {
        width: 15,
        height: 15,
        margin:10,
    }
});
