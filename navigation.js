
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/Homescreen';
import Welcome1 from './screens/WelcomeScreen';
import Dest111 from './screens/Destscreeen';



const Stack = createNativeStackNavigator();

export default function Nave(){
return (
<NavigationContainer>
<Stack.Navigator initialRouteName='Welcome' screenOptions={{  headerShown:false
}}>
  <Stack.Screen name="Home" component={Homescreen} />
  <Stack.Screen name="Welcome" component={Welcome1} />
  <Stack.Screen name="Dest1212" component={Dest111} />
</Stack.Navigator>
</NavigationContainer>
);

}