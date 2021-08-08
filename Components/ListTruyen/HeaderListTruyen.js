import React, {useState}from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from "react-native";

import { icons } from '../../constants';
import {SIZES} from '../../constants/theme';

const HeaderListTruyen = () => {
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
export default HeaderListTruyen