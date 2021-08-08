import { isTemplateElement } from '@babel/types';
import React,{useState,useEffect} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    FlatList,
    Animated,
} from 'react-native'
import CarouselIem from './CaruoselItem'
import {Dumpdatas} from '../../data/data'

const {width,height} = Dimensions.get('window');
function infinititeScroll(dataList) {
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData){
            scrollValue = scrollValue + width
        }

        else{
            scrollValue = 0
            scrolled = 0
        }
        this.flatList.scrollToOffset({ animated: true,offset: scrollValue})
    },6000)
    
}

const Carousel = ({data,getDataBanner}) =>{
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX,width)
    useEffect(() =>{
        getDataBanner(Dumpdatas)
        setDataList(data)
        infinititeScroll(dataList)
    },[])
    const [dataList,setDataList] = useState(data)
    if(data && data.length){
        return(
            <View>
                <FlatList data = {data}
                ref = {(flatList) => {this.flatList = flatList}}
                keyExtractor = {(item,index) => 'key' + index}
                horizontal
                pagingEnabled
                scrollEnabled
                snapToAlignment = 'center'
                scrollEventThrottle = {16}
                decelerationRate = {"fast"}
                showsHorizontalScrollIndicator = {false}
                renderItem = {({item}) => {
                    return <CarouselIem item = {item}/>
                }}
                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],{useNativeDriver: false}
                )}
                >   
                </FlatList>
                <View style = {styles.dotView}>
                    {data.map((_,i) =>{
                    let opacity = position.interpolate({
                        inputRange: [i-1 , i , i+1],
                        outputRange: [0.3,1,0.3],
                        extrapolate: 'clamp'
                    })
                    return(
                        <Animated.View
                        key = {i}
                        style = {{opacity, height: 5, width: 5,backgroundColor: 'white',margin: 5,borderRadius: 5}}
                        />
                    )
                })}

                </View>
            </View>
        )
    }
    else
    {
        console.log('please provide image')
        return null

    }
        
}
const styles = StyleSheet.create({
    dotView:{
        margin: 10,
        position: 'absolute',
        right:0,
        flexDirection:'row',
    },
    coating:{
        position: 'absolute',
        opacity:1,
        backgroundColor:'black',
    }
})

export default Carousel