import React from 'react'
import{
    View,
    Text,
    FlatList,
    StyleSheet,
    Dimensions
} from 'react-native'
import {listphim} from '../../data/listphim'
import {listTruyen} from '../../data/listTruyen'
import ListTruyenItem from './ListTruyenItem'
import HeaderListTruyen from './HeaderListTruyen'
const {width,height} = Dimensions.get('window')
const ListTruyen = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <HeaderListTruyen/>
            <FlatList
            numColumns = {3}
            data = {listTruyen}
            showsVerticalScrollIndicator = {false}
            renderItem = {({item}) => {
                return <ListTruyenItem item = {item} navigation = {navigation}/>
            }}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        backgroundColor: '#DFFFFF'
    }
})

export default ListTruyen
