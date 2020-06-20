import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Image,TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({navigation}){
  return (
    <View style={{  flex:2,
      backgroundColor:'#053585',
      // alignItems: 'center',
       justifyContent: 'center',
       paddingTop:40}}>
   <View style={{paddingLeft:90,paddingBottom:30}}>
   <Image source={{uri:'https://thumbs.dreamstime.com/b/movie-review-icon-monochrome-style-design-cinema-collection-ui-ux-pixel-perfect-web-apps-software-printing-usage-128440491.jpg'}} 
    style={{width:200, height:200 ,borderRadius:100,}}/>
   </View>
    <View style={{   flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingVertical:50,
    paddingHorizontal:30}}>

    <Text style={{fontSize:40,color:'#810C4F'}}>Welcome to Movie Review</Text>
    <Text style={{fontSize:20,paddingTop:10}}>Thanks for using Movie Review.</Text>
        <View style={{padding:5}}>
    <Button title="Continue"
     onPress={()=>navigation.navigate('Login')}/>
    </View>
    </View>
   
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={styles.header}>
    <View >
      <Text style={{fontSize:25,color:'#f2f2f2',paddingBottom:10,paddingLeft:20,}}>Settings</Text>
    </View>
    <View style={styles.footer}>
      <Text>Welcome to Settings bro.</Text>
    </View>
    </View>
  );
}
function DashBoardScreen() {
  return (
    <View style={styles.header}>
    <View>
      <Text style={{fontSize:25,color:'#f2f2f2',paddingBottom:10,paddingLeft:20,}}>Dashboard</Text>
    </View>
    <View style={styles.footer}>
      <Text>Welcome to Dashboard bro.</Text>
    </View>
    </View>

  );
}
function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
function MytrackerTabScreen(){
  return (
    // <Drawer.Navigator>
    //     <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    //   </Drawer.Navigator>
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen name="Dashboard" 
      iconName= 'ios-information-circle'
      component={DashBoardScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function LoginScreen({navigation}){
  return (
    <View style={styles.header}>
        <View>
        <Text style={styles.title}>Movie-Review</Text>
        </View>
        <View style={styles.footer}>
         <Text>
           Email
         </Text>
         <View>
           <TextInput 
           style={styles.textinput}
           placeholder='Attuid'>
             
           </TextInput>
         </View>
         <Text>
           Password
         </Text>
         <View>
           <TextInput 
           style={styles.textinput}
           secureTextEntry={true}
           placeholder='Password'>
           </TextInput>
         </View>
         <View 
          style={styles.button}>
         <Button title="Login"  
          onPress={()=> navigation.navigate('Home')} />
         </View>

        </View>
    
    </View>
  );
}

const Stack = createStackNavigator();
export default function App() {
  return (
      <NavigationContainer style={{    flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'}}>
        <Stack.Navigator initialRouteName="MoviewReview">
          <Stack.Screen name="MoviewReview" component={HomeScreen} />
          <Stack.Screen name="Login"  component={LoginScreen} />
          <Stack.Screen name="Home"  component={MytrackerTabScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
     justifyContent: 'center',
  },header : {
    flex:2,
    backgroundColor:'#053585',
    // alignItems: 'center',
     justifyContent: 'center',
     paddingTop:40
  },
  footer:{
    flex:1,
    backgroundColor:'#fff',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    paddingVertical:50,
    paddingHorizontal:30
  },
  title:{
    color:'#F2F2F2',
    fontSize:40,
    fontWeight:'bold',
    fontFamily:'notoserif',
    paddingBottom:50,
    paddingLeft:15
  },
  button:{
    color:'#4475C4',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop:15,
    paddingVertical:10,
    

  },
  textinput:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:1,
    color: '#05375a',
    borderBottomWidth:1,
    borderBottomColor: '#f2f2f2',
  }

});
