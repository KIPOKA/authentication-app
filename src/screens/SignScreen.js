import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView} from 'react-native'
import React, { useState } from 'react';
import Logo from '../components/logo.png'
import CustomInput from '../components/CustomInput/CustomInput';
import CustomerButtton from '../components/CustomerButton/CustomerButtton'


const SignScreen = () => {
    const {height} = useWindowDimensions();
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [secureTextEntry, setSecureTextEntry]= useState();
    const onSignInPressed =() =>{
        console.warn("Sign In")
    };
    const onForgotPasswordPressed =() =>{
        console.warn("Forgot password")
    };
    const onSiginFacebookPressed =() =>{
        console.warn("Forgot password")
    };
    const onSignInGmailPressed =() =>{
        console.warn("Forgot password")
    };const onSignInLinkedInPressed =() =>{
        console.warn("Forgot password")
    };
    const onCreateAccountPressed =() =>{
        console.warn("Forgot password")
    }
    
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}> 
      <Image
        style={[styles.logo, {height:height *0.3}]}
        resizeMode='contain'
        source={Logo}
      />
      <CustomInput
            placeholder={"Username"} 
            value={username} 
            setValue={setUsername} 
            />
      <CustomInput 
            placeholder={"Password"} 
            value={password} 
            setValue={setPassword}
            secureTextEntry={true}
            />
        <CustomerButtton
            text="Sign In" 
            onPress={onSignInPressed}
        />
        <CustomerButtton
            text="Forgot Password" 
            onPress={onForgotPasswordPressed}
            type="TERTIARY"

        />
         <CustomerButtton
            bgColor="#E7EAF4"
            fgColor="#4765A9"
            text="Sign In With FaceBook" 
            onPress={onSiginFacebookPressed}
        />
         
         <CustomerButtton
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
            text="Sign In With Gmail" 
            onPress={onSignInGmailPressed}
        />
        <CustomerButtton
            bgColor="##e3e3e3"
            fgColor="#363636"
            text="Sign In With LinkedIn" 
            onPress={onSignInLinkedInPressed}
        />
        <CustomerButtton
            text="Don't have an accout? Create one" 
            onPress={onCreateAccountPressed}
            type="TERTIARY"

        />
        
    </View>
    </ScrollView>
  )
}

export default SignScreen

const styles = StyleSheet.create({
    root:{
        alignItems:'center',
        padding:20, 
    },
    logo:{
        width:'70%',
        maxWidth:300,
        maxHeight:200,
    }
})