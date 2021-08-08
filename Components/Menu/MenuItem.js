import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { SIZES } from '../../constants/theme'
const MenuItem = ({item,navigation}) =>{
    const headerName = item.id
    return(
        <TouchableOpacity 
        style = {styles.container}
        onPress = {() => 
            navigation.navigate("Danhmuc",{name:item.title})
    }
        >
            <View style = {styles.back}>
                <Image
                source = {item.icon}
                resizeMode = "contain"
                style = {styles.icon}
                />
            </View>
            <Text style = {styles.text}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: SIZES.padding,
        alignItems: 'center',
    },
    back:{
        width: 40,
        height:40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
    },
    
    icon:{
        width: 30,
        height:30,
    },
    text:{
        marginTop: 10,
        color: 'black'
    }
})
export default MenuItem