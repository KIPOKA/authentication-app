import { StyleSheet,  TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
      value={value}
      onChangeText={setValue} 
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry} 
      />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        backgroundColor:'#e8e8e8',
        width:'90%',
        height: 50,
        borderColor:'yellow',
        borderRadius:5,
        borderWidth:1,
        paddingHorizontal:10,
        marginVertical:5,

    },
    input:{
      marginTop:10,

    }
})