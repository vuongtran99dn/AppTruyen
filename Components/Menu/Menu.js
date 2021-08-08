import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    Animated,
} from 'react-native'
import { SIZES } from '../../constants/theme'
import MenuItem from './MenuItem'
import {menuData} from './data/menuData'

const listMenu = ({navigation}) =>{
    return(
    <View style = {styles.main}>
        <FlatList data = {menuData}
        contentContainerStyle = {styles.flat}
        horizontal
        showsHorizontalScrollIndicator = {false}
        keyExtractor = {(item,index) => 'key' + index}
        renderItem = {({item}) => {
            return(
                <MenuItem
                item = {item}
                navigation = {navigation}/>
            )
        }}
        />
    </View>
    )}

const styles = StyleSheet.create({
    main:{
        alignItems: 'center',
    },
    flat:{
        flexGrow: 1,
        justifyContent: 'space-evenly'
        
    }
})

export default listMenu