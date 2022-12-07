import { View, Text, TouchableHighlight, TouchableOpacity,DrawerLayoutAndroid,StyleSheet , Button} from "react-native";
import React, { useRef, useState } from "react";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";








export default function BottomMenubar() {



  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
 



 const navigationView = () => (
    <View >
      <Text >I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );




  return (
    <DrawerLayoutAndroid
    ref={drawer}
    drawerWidth={300}
    drawerPosition={drawerPosition}
    renderNavigationView={navigationView}
  >
    <View className="bottom-0 absolute w-screen z-40">
      <View className="border-2 bg-color1  h-12 flex  justify-between items-center flex-row  px-2">
        <View className="h-full  flex justify-center items-center">
          <View className=" ">
            <TouchableOpacity underlayColor="white">
              <Entypo name="home" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="h-full  flex justify-center items-center">
        <TouchableOpacity  underlayColor="white">
          <View className="">
            <FontAwesome name="user" size={24} color="white" />
          </View>
          </TouchableOpacity>
        </View>

        <View
          className="h-14   -mt-5 rounded-full bg-color2 px-3 py-2

"
        ><TouchableOpacity>
          <View className=" ">
            <Entypo name="shopping-cart" size={34} color="white" />
          </View>

          </TouchableOpacity>
        </View>

        <View className="h-full  flex justify-center items-center">
        <TouchableOpacity>
          <View className="">
            <Ionicons name="search-sharp" size={24} color="white" />
          </View>
          </TouchableOpacity>
        </View>

        <View className="h-full  flex justify-center items-center">
        <TouchableOpacity>
          <View className="">
            <Ionicons name="menu" size={24} color="white"  onPress={() => drawer.current.openDrawer()}/>
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
       
    </DrawerLayoutAndroid>
  );
}
