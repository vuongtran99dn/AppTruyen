import React from "react";
import { Header } from "react-native/Libraries/NewAppScreen";
import {
    View,
    Text,
    TouchableOpacity
} from "react-native";

const KhamPha = ({navigation}) =>{
    return (
        <View>
            <TouchableOpacity
            onPress = {() =>{ navigation.navigate("List")

            }}>
                <Text>
                    List
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default KhamPha;