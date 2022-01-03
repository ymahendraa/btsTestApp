import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ListScreen from './src/screens/ListScreen';
import AddList from './src/screens/AddList';

const Stack = createNativeStackNavigator();
const StackScreen = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerMode: 'none',
        }}
      >
        <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
        <Stack.Screen name='LoginScreen' component={LoginScreen}/>
        <Stack.Screen name='ListScreen' component={ListScreen}/>
        <Stack.Screen name='AddListScreen' component={AddList}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const App = () => {
  
  return (
    <StackScreen />
  );
};

export default App;
