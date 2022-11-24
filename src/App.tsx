/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/** Screens */
import HomeScreen from '@/modules/Home/Screen';
import DeviceInformationScreen from '@/modules/DeviceInformation/Screen';
import CartScreen from '@/modules/Cart/Screen';
import ProgressLoaderScreen from '@/modules/ProgressLoader/Screen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen as any} />
        <Stack.Screen name="Cart" component={CartScreen as any} />
        <Stack.Screen
          name="ProgressLoader"
          component={ProgressLoaderScreen as any}
        />
        <Stack.Screen
          name="DeviceInformation"
          component={DeviceInformationScreen as any}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
