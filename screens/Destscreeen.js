import React, { useState } from "react";
import { View,Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from "expo-status-bar";
import { ChevronLeftIcon, ClockIcon, MapIcon, MapPinIcon, SunIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";

export default function Dest111(props){
    const item = props.route.params;
    const navigation = useNavigation();
    const [isFavourite,toggleFavourite]= useState(false);
    return(
        <View className="bg-white flex-1">
            <Image source={item.image} style={{width: wp(100),height: hp(55)}}/>
            <StatusBar style="light"/>

            {/* back button */}
            <SafeAreaView className="flex-row justify-between items-center w-full absolute">
                <TouchableOpacity
                 onPress={()=> navigation.goBack()}
                 className="p-2 rounded-full ml-4"
                 style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                ><ChevronLeftIcon size={wp(7)} strokeWidth={4} color={"white"}></ChevronLeftIcon></TouchableOpacity>
                <TouchableOpacity
                 onPress={()=> toggleFavourite(!isFavourite)}
                 className="p-2 rounded-full mr-4"
                 style={{backgroundColor: 'rgba(255,255,255,0.5)'}}
                ><HeartIcon size={wp(7)} strokeWidth={4} color={isFavourite?"red" : "white"}></HeartIcon></TouchableOpacity>
                

            </SafeAreaView>

            {/* title,description and booking button */}

            <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="px-5 flex flex-1 justify-between bg-white pt-8 -mt-14">
            <ScrollView showsVerticalScrollIndicator={false} className="space-y-5">
                <View className="flex-row justify-between items-start">
                    <Text style={{fontSize: wp(7)}} className="font-bold flex-1 text-neutral-700">
                        {item?.title}
                    </Text>
                    <Text style={{fontSize: wp(7), color: theme.text}} className="font-semibold">
                        $ {item?.price}
                    </Text>
                </View>
                <Text style={{fontSize: wp(3.7)}} className="text-neutral-700 tracking-wide mb-2">{item?.longDescription}</Text>
                <View className="flex-row justify-between mx-1">
                <View className="flex-row justify-between items-start">
                        <ClockIcon size={wp(7)} color={"skyblue"}></ClockIcon>
                        <View className="flex space-x-2">

                            <Text style={{fontSize: wp(4.5)}}className="font-bold pl-1.5 text-neutral-700 pb-1">{item.duration}</Text>
                            <Text>Duration</Text>

                        </View>
                
                    </View>
                    <View className="flex-row justify-between items-start">
                        <MapPinIcon size={wp(7)} color={"red"}></MapPinIcon>
                        <View className="flex space-x-2">

                            <Text style={{fontSize: wp(4.5)}}className="font-bold pl-1.5 text-neutral-700 pb-1">{item.distance}</Text>
                            <Text>Distance</Text>

                        </View>
                
                    </View>
                    <View className="flex-row justify-between items-start">
                        <SunIcon size={wp(7)} color={"orange"}></SunIcon>
                        <View className="flex space-x-2">

                            <Text style={{fontSize: wp(4.5)}}className="font-bold pl-1.5 text-neutral-700 pb-1">{item.weather}</Text>
                            <Text>Weather</Text>

                        </View>
                
                    </View>
                </View>
                <View className="pt-20">
                <TouchableOpacity style={{backgroundColor: theme.bg(0.7), height: wp(15), width: wp(50) }} className="mb-6 mx-auto flex justify-center rounded-full items-center ">
                    <Text className="font-bold text-white" style={{fontSize: wp(5.5)}}>Book Now</Text>
                </TouchableOpacity>
                </View>
            </ScrollView>
            </View>

        </View>
    );
}