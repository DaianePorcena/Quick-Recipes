import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView, Image } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'

import { Ingredientes } from '../../Components/ingredients';
import { Instrucoes } from '../../Components/instructions';

export function Detail() {
    const route = useRoute();
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params?.data.name : "Detalhes da receita",
            headerRight: () => (
                <Pressable onPress={() => console.log("TESTANDO")}>
                    <Entypo
                        name='heart'
                        size={28}
                        color='#FFFFFF'
                    />
                </Pressable>
            )
        })

    }, [navigation])

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 22 }} style={styles.container} showsVerticalScrollIndicator={false}>
            <Image
                source={{ uri: route.params?.data.cover }}
                style={styles.cover}
            />
            <View style={styles.headerDetail}>

                <View style={styles.headerInfo}>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.subtitle}>Serve: <Text style={styles.dados}> {route.params?.data.rendimento}</Text> </Text>
                        <Text style={styles.subtitle}>Preparo: <Text style={styles.dados}>{route.params?.data.time} Min</Text> </Text>
                    </View>
                </View>

            </View>

            <View style={styles.InstructionsDetail}>
                <Text style={styles.title}>Ingredientes</Text>

                {route.params?.data.ingredients.map((item) => (
                    <Ingredientes key={item.id} data={item} />
                ))}

                <Text style={styles.title}>Modo de Preparo</Text>

                {route.params?.data.instructions.map((item, index) => (
                    <Instrucoes key={item.id} data={item} index={index} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0E5E7',
        paddingTop: 45,
        paddingStart: 16,
        paddingEnd: 16,
    },
    headerDetail: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 22,

    },
    InstructionsDetail: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 45,
        paddingBottom: 8
    },
    cover: {
        height: 225,
        width: '100%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    headerInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 14
    },
    title: {
        fontFamily: 'Inter_700Bold',
        fontSize: 24,
        color: '#C60024',
        marginTop: 14,
        marginBottom: 8,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: 'Inter_700Bold',
        fontSize: 16,
        color: '#423D3D',
        marginBottom: 8,

    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingEnd: 17,
        paddingStart: 17,
    },
    dados: {
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        color: '#423D3D',
        marginBottom: 8
    },


})