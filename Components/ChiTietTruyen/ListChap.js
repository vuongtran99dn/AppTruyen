import React from 'react'
import{
    View,
    Text,
    Dimensions,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
const {width,height} = Dimensions.get('window')
const textView = (item,key) =>{
    return(
        <TouchableOpacity
        onPress = {() => {navigation.goBack()}}>
            <Text key = {key}>Chaper: {item}</Text>
        </TouchableOpacity>
    )
}
const renderChap = (numList,key,navigation) =>{
    return(
        <ScrollView style = {{width:width -20}}>
            {
                numList.map(textView,navigation)
            }
        </ScrollView>

    )
}
const ListChap = ({item,navigation}) =>{
    var numChap = [];
    var numList = [];
    var con = 0;
        for(var i = item.latestChap; i >= 1; i--){
            numChap.push(i)
            con++;
            if(con % 15 == 0){
                numList.push(numChap);
                numChap = []
                con = 0
            }
            if(i == 1){
                numList.push(numChap)
                numChap = []
                con = 0
            }
        }
    return(
        <View >
                <Text>DANH SÁCH CHƯƠNG</Text>
            <ScrollView
            horizontal>
                {
                    numList.map((numlist,key) =>{
                        return(
                            <View key = {key}>
                                <ScrollView style = {{width:width -20}}>
                                {
                                    numlist.map((item,key)=>{
                                        return(
                                            <TouchableOpacity
                                            onPress = {() => {navigation.goBack()}}>
                                                <Text key = {key}>Chaper: {item}</Text>
                                            </TouchableOpacity>
                                        )

                                    })
                                }
                            </ScrollView>
                        </View>
                        );
                    })
                }
            </ScrollView>
        </View>

    )
}

export default ListChap