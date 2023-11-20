import React from "react";
import { TouchableOpacity } from "react-native";
import { Platform } from "react-native";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { View,Text, SafeAreaView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import { TextInput } from "react-native";
import Categories from "../components/categories";
import Sortcate from "../components/Sortcategory";
import Destni from "../components/Destination";
import { useNavigation } from "@react-navigation/native";
const ios= Platform.OS=="ios";

export default function Homescreen(){
  const navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1 bg-white">
        <ScrollView showsVerticalScrollIndicator={false} className={"space-y-6 "}>
          {/* avatar */}
          <View className="mx-5 flex-row justify-between items-center mb-10">
            <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">Let's Discover</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Welcome')}>
              <Image source={require('../assets/images/avatar.png')} style={{height: wp(12), width: wp(12)}} />
            </TouchableOpacity>
          </View>
  
          {/* search bar */}
          <View className="mx-5 mb-4">
            <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
              <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
              <TextInput
                placeholder='Search destination'
                placeholderTextColor={'gray'}
                className="flex-1 text-base mb-1 pl-1 tracking-wider"
              />
            </View>
          </View>
  
          {/* categories */}
          <View className="mb-4">
            <Categories />
          </View>


          {/* sort categories */}
          <View className="mb-4">
            <Sortcate />
          </View>


          {/* Destination */}  
          <View className="mb-4">
            <Destni/>
          </View>







          </ScrollView>
          </SafeAreaView>
    );
}