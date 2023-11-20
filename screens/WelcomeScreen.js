import React from "react";
import { TouchableOpacity } from "react-native";
import { View,Text, SafeAreaView, Image } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient'
import Nave from "../navigation";
import { useNavigation } from "@react-navigation/native";


export default function Welcome1(){
    const Nave = useNavigation();
    return(
        
        <View className="flex-1 flex justify-end">
            <Image source={require('../assets/images/welcome.png')} 
            className="h-full w-full absolute"
            />
           
        <View className="p-5 pb-10 space-y-8">
            <LinearGradient
                colors={['transparent', 'rgba(3,105,161,0.8)']}
                style={{width: wp(100) , height: hp(60)}}
                start={{x:0.5, y:0}}
                end={{x:0.5, y:1}}
                className="absolute bottom-0"
            
            />

            <View className="space-x-3">
                <Text className=" font-bold text-5xl text-white px" style={{fontSize: wp(10)}}>
                    Traveling Made Easy
                </Text>

                <Text className="font-medium text-white pt-3 " style={{fontSize:wp(4)}}>
                    Experience the world with us
                </Text>
                
            </View>
            <TouchableOpacity onPress={()=> Nave.navigate("Home")} className="bg-orange-500 mx-auto p-3 px-12 rounded-full justify-center">
                    <Text className="font-bold text-white text-2xl" style={{fontsize: wp(5.5)}}>
                        Let's Go
                    </Text>
                </TouchableOpacity>
        </View>
        </View>
        
    );
}