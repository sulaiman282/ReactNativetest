import { StyleSheet, Text, View, Button, TextInput, ScrollView } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import BottomMenubar from "./components/Layouts/BottomMenubar";
export default function App() {
  const [name, setName] = useState("Sulaiman");

  const stack = createNativeStackNavigator;

  const testfun = () => {
    console.log(name);
  };
  return (
    <View className="border-2 h-fit">
      <StatusBar style="light"></StatusBar>

      
    <ScrollView className="border-4 h-fit">    
      
      <View className=" flex justify-center items-center " >
        <TextInput
          name="username"
          placeholder="Enter your name"
          className="border-2 my-2 px-2 py-1"
          onChangeText={(e) => setName(e)}
        ></TextInput>
        <Text className="text-blue-900 my-2 border-2 px-2 py-1">{name}</Text>
        <Button title="Submit" onTouch={testfun}></Button>
      </View>
      

      </ScrollView>


<BottomMenubar/>




       

    
    


   

     
      

    </View>
  );
}
