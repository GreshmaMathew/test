import React from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'
import Imagedetail from '../components/Imagedetail'

const Detailscreen = ({navigation}) =>{
    return(
        <View>
            <Text>detail screen</Text>
            <Button title="go to image detail" onPress={()=>navigation.navigate('Home')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    }
})

export default Detailscreen