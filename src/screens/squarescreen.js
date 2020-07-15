import React,{useReducer} from 'react'
import {Text,View,StyleSheet,Button} from 'react-native'
import ColorScreen from '../components/colorScreen'
import { color } from 'react-native-reanimated'

const color_increment=15;
const reducer = (state,action) =>{

    switch(action.colortochange){
        case 'red':
            return {...state,red:state.red+action.amount};
            case 'green':
                return {...state,green:state.green+action.amount};
                case 'blue':
                    return {...state,blue:state.blue+action.amount};
                    default:
                        return state
    }
};

const squarescreen = () =>{
const [state,dispatch]= useReducer(reducer,{red:0,green:0,blue:0})
const {red,green,blue}=state
    return(
        <View style={styles.container}>
          <ColorScreen 
         onincrease={()=>dispatch({colortochange:'red',amount:color_increment})}
         ondecrease={()=>dispatch({colortochange:'red',amount:-1*color_increment})}
          color="red"/> 
          <ColorScreen 
          color="green"
          onincrease={()=>dispatch({colortochange:'green',amount:color_increment})}
          ondecrease={()=>dispatch({colortochange:'green',amount:-1*color_increment})}
          /> 
          <ColorScreen 
          color="blue"
          onincrease={()=>dispatch({colortochange:'blue',amount:color_increment})}
          ondecrease={()=>dispatch({colortochange:'blue',amount:-1*color_increment})} 
          /> 
        <View style={{height:100,width:100,backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'blue'
    }
})

export default squarescreen