import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CustomerButtton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return ( 
     <Pressable 
        style={[styles.container, 
            styles[`container_${type}`],
            bgColor?{backgroundColor:bgColor}:{},
            
        ]}
        onPress={onPress}
    >
        <Text 
            
            style={
                [styles.text,
                styles[`text_${type}`],
                fgColor?{color:fgColor}:{},
                ]}>{text}</Text>
    </Pressable> 
  )
}

export default CustomerButtton

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        width:'90%',
        padding: 15,
        marginVertical: 5,
        borderRadius:5,
        alignItems:'center',
    },
    container_PRIMARY:{
        backgroundColor:'#3B71F3',
    },
    container_TERTIARY:{
    },
    text_PRIMARY:{
        fontWeight:'bold',
        color:'white',

    },
    text_TERTIARY:{ 
        color:'gray',

    }
})