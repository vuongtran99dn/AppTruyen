import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { SIZES } from '../../constants/theme'

const {width,height} = Dimensions.get('window')
const ListTruyenItem = ({item,navigation}) =>{
    return(
        <TouchableOpacity
        style = {styles.container}
        onPress = {()=>{navigation.navigate('ChiTietTruyen',item)}}>
            <View >
                <Image
                style = {styles.image}
                source = {{uri: item.imgURL}}
                />
                    <Text style={styles.nameText}
                    numberOfLines = {1}
                    >
                        {item.title}
                    </Text>
                    <Text style={styles.chapText}>{item.latestChap}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        width: width/3 - 20,
        borderRadius: 5,
        margin: 10,
        
    },
    image:{
        borderRadius: 5,
        width: width/3 - 20,
        height: height/4,
        resizeMode: 'stretch'
    },
    nameText:{
        fontSize: 13,
        textAlign: 'center'
    },
    chapText:{
        color: '#B0B0B0',
        fontSize:11,
        textAlign: 'center'
    }
})

export default ListTruyenItem