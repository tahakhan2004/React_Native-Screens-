import React, { useState } from "react"
import {View , Text , StyleSheet , Image, ImageBackground, TextInput, Button, TouchableOpacity} from "react-native"
// import { create } from "react-test-renderer"
import icon from "../Asstes/Logo.png"
function SignUp1(){
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [number, setnumber] = useState()
  const [name, setname] = useState()

  const loginn = ()=>{
    const obj = {
      email,
      password,
      number,
      name
    }
    
    console.log(obj);
  }

  return<>
  <ImageBackground style={{ height: "100%",width:"100%"}} source={{uri : "https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"}}>
  <View style={{width:"100%", padding:10, marginTop:30}}>
    <View style={{alignItems: "center"}}>
    <Image source={icon} style={{width:150, height:150}}/>
    </View>
    <Text style={styles.mainheading}>SignUp</Text>

    <View style={{alignItems:'center', padding:8, marginTop: 9  }}>
    <TextInput placeholder="UserName" onChangeText={(e)=>setname(e)} style={[styles.inp, styles.shadow]} />
  </View>
  <View style={{alignItems:'center', padding:8, marginTop: 5  }}>
    <TextInput placeholder="Contact No" keyboardType="numeric" onChangeText={(e)=>setnumber(e)} style={[styles.inp, styles.shadow]} />
  </View>
  <View style={{alignItems:'center', padding:8, marginTop: 5  }}>
    <TextInput placeholder="Email Address" keyboardType="email-address" onChangeText={(e)=>setemail(e)} style={[styles.inp, styles.shadow]} />
  </View>
  <View style={{alignItems:'center', padding:8, marginTop:5}}>
    <TextInput placeholder="Password" secureTextEntry={true} onChangeText={(e)=>setpassword(e)} style={[styles.inp, styles.shadow]} />
  </View>
  

  <View style={{alignItems:'center', padding:8}}>
    {/* <Button title="Login" style={styles.butn}/> */}
    <TouchableOpacity style={styles.butn} onPress={loginn}>
      <Text style={{color:"white", textAlign:"center", fontWeight:"900"}}>SignUp</Text>
    </TouchableOpacity>
    
  </View>

  <View style={{position:"absolute", top:550, left:110}}>
  <Text >Powered by Taha Khan</Text>
  </View>
  </View>
  
  </ImageBackground>
  </>
}
export default SignUp1



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
      backgroundColor: "white",
      padding: 5,
      fontSize:18,
      color:"black",
      borderRadius:10,
      textAlign:"center"
    },
    butn:{
      backgroundColor:"#002648",
      borderRadius: 10,
      padding:8,
      width:"30%",
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