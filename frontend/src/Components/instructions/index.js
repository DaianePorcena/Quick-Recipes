import { View, Text, StyleSheet } from "react-native";

export function Instrucoes({data, index}){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>{index+1}. </Text>
            <Text style={styles.name}>{data.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingStart: 17,
        paddingEnd: 25,
        // marginBottom: 8,
        textAlign: 'justify'
    },
    name:{
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        lineHeight: 22,
        color: '#423D3D',
        paddingBottom: 8,
        textAlign: 'justify'
    }
})