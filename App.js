import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import tabs from "./Navigation/tabs" 
import ListTruyen from "./Components/ListTruyen/ListTruyen"
import ChiTietTruyen from './Components/ChiTietTruyen/ChiTietTruyen'
import { Provider } from 'react-redux'
import store from './redux/store'
const Stack = createStackNavigator();

const HomeStack = () =>{
  return(
    <Stack.Screen 
            options ={{
              headerShown: true
            }}
            name = "Danhmuc" component ={ListTruyen}/>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Stack.Navigator
          screenOptions = {{
            headerShown: false
          }}
            
            initialRouteName = {"tabs"}>
            <Stack.Screen name = "Home" component ={tabs}/> 
            <Stack.Screen name = "Danhmuc" component ={ListTruyen}/>
            <Stack.Screen name = "ChiTietTruyen" component ={ChiTietTruyen}/>

          </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;