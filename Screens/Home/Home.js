import React, {useState}from "react";
import {
    View,
    Text,
    image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Image,
    FlatList,
    SafeAreaView,
    ScrollView,
} from "react-native";

import { icons, images, fonts} from '../../constants';
import {SIZES} from '../../constants/theme';
import Carousel from '../../redux/container/Caruosel'
import Menu from '../../Components/Menu/Menu'
import { icon } from '../../data/icon';

const Home =({navigation})  => {
    //Hàm render custom header dành cho home(logo, tìm kiếm)
    function renderHeader() {
        return (
            <View style = {{backgroundColor:'#FFFF', flexDirection: "row", height: 50}}>
                <View style = {{
                flex: 1, 
                flexDirection:  "row",
                padding: 10,
                alignItems: 'center' 
                }}>
                        <Image 
                            source = {icons.logo}
                            resizeMode = "contain"
                            style = {{
                                width: 30,
                                height:30,
                            }}   
                        />
                        <Text style = {{}}> APPPHIM</Text>
                </View >
                <View style = {{
                flex: 1, 
                flexDirection:  "row",
                padding: 10,
                justifyContent: 'flex-end'
                }}>
                    <TouchableOpacity 
                        style ={{
                            width: 50,
                            paddingLeft: SIZES.padding *2,
                            justifyContent: "center",
                    }}>
                        <Image
                            source = {icons.search}
                            resizeMode = "contain"
                            style = {{
                                width: 25,
                                height:25,
                            }}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style ={{
                            width: 50,
                            paddingLeft: SIZES.padding *2,
                            justifyContent: "center",
                    }}>
                        <Image
                            source = {icons.notification}
                            resizeMode = "contain"
                            style = {{
                                width: 25,
                                height:25,
                            }}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style ={{
                            width: 50,
                            paddingLeft: SIZES.padding *2,
                            justifyContent: "center",
                    }}
                    
                    >
                        <Image
                            source = {icons.vip}
                            resizeMode = "contain"
                            style = {{
                                width: 25,
                                height:25,
                            }}
                            />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style = {style.container}>
            {renderHeader()}
            <ScrollView
                showsHorizontalScrollIndicator= {false}
                showsVerticalScrollIndicator = {false}>
                <View>
                    <Carousel/>
                    <Menu
                     data = {icon}
                     navigation = {navigation}
                    />
                </View>
            </ScrollView> 
        </SafeAreaView>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFFFFF',
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius:3,
        elevation: 1,
    },
})
export default Home;