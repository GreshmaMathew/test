import React, {useState} from 'react'
import {Text,View,StyleSheet,Button,FlatList,ScrollView} from 'react-native'

const Homescreen = () =>{

    const [color,setcolor]=useState([])
    return(    
        <ScrollView> 
    <View style={styles.container}>
    <Button title="add a color" onPress={()=>{

        setcolor([...color,randomrgb()])
    }}/>
    <FlatList 
    keyExtractor={(item)=>item}
    data={color}
    renderItem={({item})=>{
        return <View style={{height:100,width:100,backgroundColor:item}}/>
    }}
    />
    
    </View>
    </ScrollView> 
      
    )
}

const randomrgb = () => {
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    return `rgb(${red},${blue},${green})`

}

const styles=StyleSheet.create({
    container:{
        alignItems:'center'
    }
})

export default Homescreen