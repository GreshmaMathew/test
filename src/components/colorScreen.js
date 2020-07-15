import React from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'
import { color } from 'react-native-reanimated'

const ColorScreen = ({color,onincrease,ondecrease}) =>{ 
    return(      
    <View style={styles.container}>
        <Text>{color}</Text>  
        <Button onPress={()=>onincrease()} title={`INCREASE ${color}`}/>
        <Button onPress={()=>ondecrease()} title={`DECREASE ${color}`}/>
    </View>   
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    }
})

export default ColorScreen