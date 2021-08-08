import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
import TagTruyen from './TagTruyen'
import ListChap from './ListChap'
const {width,height} = Dimensions.get('window')

const ChiTietTruyen = ({navigation,route}) =>{
        
    return(
        <View style = {styles.container}>
            <TagTruyen item = {route.params}/>
            <ListChap item = {route.params} navigation ={navigation}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginBottom:10,
    }
}
)

export default ChiTietTruyen