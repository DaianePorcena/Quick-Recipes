import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { ARQUIVO_URL } from "../../services/api"

export function FoodList({ data }) {
    const navigation = useNavigation();
    
    function handleNavigate(){
        navigation.navigate("Detail", {data: data})
        
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
            <Image
                source={{uri: ARQUIVO_URL + data.image}}
                style={styles.cover}
            />
            <View style={styles.info}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.description}>
                    <MaterialCommunityIcons name="clock-outline" size={24} color="#696666" style={styles.min} />
                    <Text style={styles.time}>{data.time} min
                    </Text>
                </View>


            </View>

        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 14,
        marginHorizontal: '2%',
        width: '46%',
        height: 280,
        borderRadius: 10,
    },
    cover: {
        width: '100%',
        height: 210,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        resizeMode: 'cover'
    },
    info: {
        padding: 9
    },
    name: {
        fontSize: 14,
        fontFamily: 'Inter_700Bold',
        color: '#423D3D',
        paddingBottom: 9,
        textAlign: 'center',
    },
    description:{
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
        
    },
    time: {
        fontSize: 16,
        fontFamily: 'Inter_700Bold',
        color: '#696666',
    },
    min: {
        paddingHorizontal: 10
    }
})
