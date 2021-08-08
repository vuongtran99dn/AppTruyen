import React from 'react'
import{
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native'
const {width,height} = Dimensions.get('window')

const TagTruyen = ({item}) => {

    return(
        <View style = {styles.container}>
            <View>
                <Image
                style = {styles.image}
                source = {{uri: item.imgURL}}
                />
            </View>
            <View>
                <Text>{item.title}</Text>
                <Text>Tình trạng: {item.status}</Text>
                <Text>Mới nhất: {item.latestChap}</Text>
                <Text>Tác giả:{item.tacGia}</Text>
                <View>
                    <Text>Thống kê: </Text>
                    <Text>+ Like: {item.like}</Text>
                    <Text>+ Follow: {item.follow} </Text>
                    <Text>+ Lượt xem: {item.view} </Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    image:{
        borderRadius: 5,
        width: width/3,
        height: height/4,
        resizeMode: 'stretch'
    },
})
export default TagTruyen