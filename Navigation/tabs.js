import React from "react";
import {
    View,
    Image,
} from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"

import {Home,KhamPha,TruyenHinh,Them} from "../Screens"
import {icons,theme} from "../constants"
import { COLORS } from "../constants/theme";

const Tab = createBottomTabNavigator();

const tabs = () => {
    return (
        <Tab.Navigator
            //tabBarOptions = {{
                //showLabel: false
            //}}
        >
            <Tab.Screen
                name = "TrangChu"
                component = {Home}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source = {icons.house}
                        resizeMode = "contain"
                        style = {{
                            width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.secondary 
                        }}/>
                    )
                }}
            />
            <Tab.Screen
                name = "KhamPha"
                component = {KhamPha}
                options = {{
                    title: "khám phá",
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source = {icons.house}
                        resizeMode = "contain"
                        style = {{
                            width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.secondary 
                        }}/>
                    )
                }}
            />
            <Tab.Screen
                name = "TruyenHinh"
                component = {TruyenHinh}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source = {icons.house}
                        resizeMode = "contain"
                        style = {{
                            width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.secondary 
                        }}/>
                    )
                }}
            />
            <Tab.Screen
                name = "Them"
                component = {Them}
                options = {{
                    tabBarIcon: ({focused}) => (
                        <Image 
                        source = {icons.house}
                        resizeMode = "contain"
                        style = {{
                            width: 25, height: 25, tintColor: focused ? COLORS.primary : COLORS.secondary 
                        }}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default tabs;