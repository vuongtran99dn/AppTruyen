import React from 'react'
import {
    View,
    StyleSheet,
    Image,
    Text,
    Dimensions,
} from 'react-native'

const {width,height} = Dimensions.get('window');

const CarouselItem = ({item}) => {
    return (
        <View style = {styles.cardView}>
            <Image style = {styles.image} source = {{uri: item.url}}/>
            <View style = {styles.coating}></View>
            <View style = {styles.TextView}>
                <Text style ={styles.itemTitle}>{item.title}</Text>
                <Text style = {styles.itemDescription}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    coating:{
        position: 'absolute',
        flex: 1,
        width: width -20,
        height : height *0.25,
        backgroundColor: 'black',
        borderRadius : 10,
        shadowColor: '#000',
        shadowOffset: {width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius: 3,
        elevation :5,
        opacity: 0.2
    },
    cardView: {
        flex: 1,
        width: width -20,
        height : height *0.25,
        backgroundColor: 'black',
        margin: 10,
        borderRadius : 10,
        shadowColor: '#000',
        shadowOffset: {width:0.5,height:0.5},
        shadowOpacity:0.5,
        shadowRadius: 3,
        elevation :5
    },
    TextView:{
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image:{
        width: width - 20,
        height: height * 0.25,
        borderRadius: 10,
    },
    itemTitle:{
        color: 'white',
        fontSize: 22,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription:{
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: {width: 0.8, height: 0.8},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    }
})

export default CarouselItem