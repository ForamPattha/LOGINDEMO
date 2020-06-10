import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator,DrawerActions} from 'react-navigation-drawer';
import Splash from './Splash';
import ForgotPassword from './ForgotPassword';
import Login from './Login';
import SignUp from './SignUp';
import VerifyCode from './VerifyCode';
import ConfirmForgotPwd from './ConfirmForgotPwd';
import Home from './Home';
import Menu from './Menu';
import Community from './Community';
import Reminder from './Reminder';
import Friends from './Friends';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Profile from './Profile';
import Progress from './Progress';
import { Image,View,TouchableOpacity,Text } from 'react-native';
import AfterSignUp from './AfterSignUp';
import React from 'react';
import DisplayMemberShip from './DisplayMemberShip';

const CommunityStack=createStackNavigator({
    Community:{
        screen:Community,
        navigationOptions:{
            title:"Community"
        }
    },
},{

});

const ReminderStack=createStackNavigator({
    Reminder:{
        screen:Reminder,
        navigationOptions:{
            title:"Daily Reminder"
        }
    }
})

const FriendStack=createStackNavigator({
    Friends:{
        screen:Friends,
        navigationOptions:{
            title:"Friends"
        }
    }
});


//Tab Stack
const HomeTabStack=createStackNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            title:"Shiv Yog"
        }

    },
},{
    //headerMode:'none',
    defaultNavigationOptions:({navigation})=>({
        headerTintColor: 'black',
            headerTitleStyle: {
                fontSize: 18,
            },
        headerLeft:(
            <View  style={{
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row'
            }}>
                <TouchableOpacity style={{ marginLeft: 10, height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}
                        onPress={() => navigation.dispatch(DrawerActions.openDrawer())
                        }> 
                    <View>
                        <Image  style={{ height: 25, width: 25, }} source={require ('./Images/menu.png')}></Image>
                    </View>

                </TouchableOpacity>       
            </View>
        ),
        headerRight:(
            <View  style={{
                height: 64,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection:'row'
            }}>
                <TouchableOpacity style={{ marginRight: 10, height: 40, width: 40, alignItems: 'center', justifyContent: 'center' }}
                      > 
                    <View>
                        <Image  style={{ height: 25, width: 25, }} source={require ('./Images/search.png')}></Image>
                    </View>

                </TouchableOpacity>       
            </View>
        ) 
       
    })


}); 
const ProfileTabStack=createStackNavigator({
    Profile:{
        screen:Profile,
        navigationOptions:{
            title:"Profile",
            //headerTransparent:'true'
        }

    },
}); 
const ProgressTabStack=createStackNavigator({
    Progress:{
        screen:Progress,
        navigationOptions:{
            title:"Progress"
        }
        
    },
}); 
const Tab=createBottomTabNavigator({
        Home:{
            screen:HomeTabStack,
            navigationOptions:{
                tabBarIcon:(
                    <Image source={require ('./Images/icon.png')} style={{width:20,height:20}} />
                ),
            }
        },
        Progress:{screen:ProgressTabStack,
            navigationOptions:{
                tabBarIcon:(
                    <Image source={require ('./Images/rise.png')} style={{width:20,height:20}} />
                )
            }
        },
        Profile:{screen: ProfileTabStack,
            navigationOptions:{
                tabBarIcon:(
                    <Image source={require ('./Images/avatar.png')} style={{width:20,height:20}} />
                )
            }
        },
        
},{
    headerMode:'none'

});



const MyDrawer=createDrawerNavigator({
   CommunityStack:CommunityStack,
    ReminderStack:ReminderStack,
    FriendStack:FriendStack,
    Stack:Tab,
},{
    
    //headerMode:"none",
    contentComponent:Menu,
    
});

const  AppStack=createStackNavigator({
    Home:{
        screen:MyDrawer
    },
    
 },{
     headerMode:'none'
 });

const AuthStack=createStackNavigator({
    Login:Login
    
},{
    headerMode:'none',
})


const Router = createStackNavigator({
    Splash: {
        screen: Splash,
    },
    App:AppStack,
    Auth:AuthStack,
    ForgotPassword: {
        screen: ForgotPassword,

    },
    SignUp:{
        screen:SignUp,
    },
    VerifyCode:{
        screen:VerifyCode,
    },
    ConfirmForgotPwd:{
        screen:ConfirmForgotPwd,
    },
  
    Menu:{
        screen:Menu
    },
    AfterSignUp:{
        screen:AfterSignUp,
    },
    DisplayMemberShip:DisplayMemberShip

},
    {
        headerMode: 'none',
        initialRouteName: 'Splash',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "black",
                shadowColor: 'transparent',
                shadowRadius: 0,
                borderBottomWidth: 0,
                shadowOffset: {
                    height: 0,
                },
                elevation: 0
            },
            headerTintColor: '#fff',
            headerTitleStyle: {

                fontSize: 18,
                fontFamily: 'Lato-Bold',

            },
        },

    }



 )
export default createAppContainer(Router)