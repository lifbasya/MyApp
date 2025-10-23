import { Image, ScrollView, Text, View } from "react-native";

export default function Latihan2() {
    return (
        <View>
            <Text>Latihan 2</Text>
            <ScrollView>
                <Image source={require("@/assets/images/react-logo.png")} style={{width: 200, height: 200}} />
                <Image source={require("@/assets/images/react-logo.png")} style={{width: 200, height: 200}} />
                <Image source={require("@/assets/images/react-logo.png")} style={{width: 200, height: 200}} />
                <Image source={require("@/assets/images/react-logo.png")} style={{width: 200, height: 200}} />
                <Image source={require("@/assets/images/react-logo.png")} style={{width: 200, height: 200}} />
            </ScrollView>
            
        </View>
    )
}