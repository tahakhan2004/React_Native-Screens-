import React, { useState } from "react"
import {View , Text , StyleSheet , Image, ImageBackground, TextInput, Button, TouchableOpacity} from "react-native"
// import { create } from "react-test-renderer"
import icon from "../Asstes/Logo.png"
import back from "../Asstes/background.jpg"
import back2 from "../Asstes/back2.webp"
import icon2 from "../Asstes/logo2.png"
import back4 from "../Asstes/background2.jpg"
import back3 from "../Asstes/back3.jpg"
import { SocialIcon } from "@rneui/themed"
import faceb from "../Asstes/fb.png"
import git from "../Asstes/git.png"

// import {SocialIcon} from '@rneui/themed';

function Login2(){
  const [email, setemail] = useState()
  const [password, setpassword] = useState()

  const loginn = ()=>{
    const obj = {
      email,
      password
    }
    
    console.log(obj);
  }

  return<>
  <ImageBackground style={{ height: "100%",width:"100%"}} source={back4}>
  <View style={{width:"100%", padding:10, marginTop:0}}>
    <View style={{alignItems: "center"}}>
    <Image source={icon2} style={{width:100, height:100}}/>
    </View>
    {/* <Text style={styles.mainheading}>LogIn</Text> */}
    
  <View style={{alignItems:'center', padding:8, marginTop: 20  }}>
    <TextInput placeholder="Email Address" keyboardType="email-address" onChangeText={(e)=>setemail(e)} style={styles.inp} placeholderTextColor={'white'}/>
  </View>
  <View style={{alignItems:'center', padding:8}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(e)=>setpassword(e)} style={styles.inp} placeholderTextColor={'white'}/>
  </View>

  <View style={{alignItems:'center', padding:8}}>
    {/* <Button title="Login" style={styles.butn}/> */}
    <TouchableOpacity style={styles.butn} onPress={loginn}>
      <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Login</Text>
    </TouchableOpacity>
  </View>
  <Text style={{color:"white", textAlign:"center", fontWeight:"900", marginTop:15}}>Or Connect with</Text>

<View style={{ width:"100%", padding:5, marginTop:18}}>
  <TouchableOpacity style={{justifyContent:"center", alignItems:'center'}}>
    <Image source={faceb} style={{width:30, height:30}}/>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Facebook</Text>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900", marginTop:15}}>Or</Text>
    <Image source={git} style={{width:30, height:30, marginTop:18}}/>
    <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>Github</Text>

    </TouchableOpacity>

    
    </View>
  <View style={{position:"absolute", top:600, left:110}}>
  <Text >Powered by Taha Khan</Text>
  </View>
  </View>


  </ImageBackground>
  </>
}
export default Login2



const styles = StyleSheet.create({
    mainheading : {
      fontSize: 30,
      color: "#23395d",
      textAlign: "center",
    },
    mainContainer : {
      justifyContent: "center",
      alignItems: "center",
    },
    inp:{
      width: "90%",
    //   backgroundColor: "white",
      padding: 5,
      fontSize:18,
      color:"white",
      borderRadius:10,
      textAlign:"center",
      borderBottomWidth: 1,
      borderBottomColor:"white"
    },
    butn:{
      backgroundColor:"#002648",
      borderRadius: 10,
      padding:8,
      width:"30%",
      marginTop:8
    },
   shadow:{  
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  }
})