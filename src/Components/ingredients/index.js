import { View, Text, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export function Ingredientes({data}){
    return(
        <View style={styles.container}>
            <Icon name="circle" size={10} color="#423D3D" style={{ marginTop: 8, marginRight: 8 }} />
            <Text style={styles.name}> {data.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingStart: 17,
    },
    name:{
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        color: '#423D3D',
    }
})