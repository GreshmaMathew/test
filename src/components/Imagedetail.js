import React from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'

const Imagedetail = (props) =>{ 
    console.log(props)
    return(      
    <View style={styles.container}>
        <Text>Imagedetail</Text>      
    </View>    
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    }
})

export default Imagedetail