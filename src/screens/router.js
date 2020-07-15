import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homescreen from './homescreen'
import Detailscreen from './detailscreen'
import squarescreen from './squarescreen'



const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen name="Square" component={squarescreen} />    
      <Stack.Screen name="Home" component={Homescreen} />    
      <Stack.Screen name="Details" component={Detailscreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;