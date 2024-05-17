// Stack.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Detail from '../Screen/Detail';
import List from '../Screen/List';
import CartScreen from '../Screen/CartScreen';

const Stack = createNativeStackNavigator();

const Stackk = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="list" component={List}  />
        <Stack.Screen name="detail" component={Detail} />
        <Stack.Screen name="cartitem" component={CartScreen} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stackk;
