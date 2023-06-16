import { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { ARQUIVO_URL, DETALHES_URL } from '../../services/api'
import axios from 'axios';


import { Ingredientes } from '../../Components/ingredients';
import { Instrucoes } from '../../Components/instructions';

export function Detail() {
    const route = useRoute();
    const navigation = useNavigation();
    const receitaId = route.params.data.receitas_id;
    const [detail, setDetail] = useState({});

    console.log(receitaId)
    useEffect(() => {
        axios
            .get(`${DETALHES_URL}/detalhes/${receitaId}`)
            .then((response) => {
                console.log(response.data); // Exibe a resposta completa da API

                console.log(Array.isArray(response.data.ingredientes)); // Verifica se ingredientes é um array
                console.log(Array.isArray(response.data.instrucoes)); // Verifica se instrucoes é um array

                console.log(response.data.ingredientes); // Exibe os ingredientes retornados
                console.log(response.data.instrucoes); // Exibe as instrucoes retornadas

                setDetail(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [receitaId]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.data ? route.params.data.name : 'Detalhes da receita',
        });
    }, [navigation, route.params?.data]);

    return (
        <ScrollView
            contentContainerStyle={{ paddingBottom: 22 }}
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Image source={{ uri: ARQUIVO_URL + route.params?.data.image }} style={styles.cover} />
            <View style={styles.headerDetail}>
                <View style={styles.headerInfo}>
                    <Text style={styles.title}>{route.params?.data.name}</Text>
                    <View style={styles.info}>
                        <Text style={styles.subtitle}>
                            Serve: <Text style={styles.dados}>{route.params?.data.rendimento}</Text>
                        </Text>
                        <Text style={styles.subtitle}>
                            Preparo: <Text style={styles.dados}>{route.params?.data.time} Min</Text>
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.InstructionsDetail}>
                <Text style={styles.title}>Ingredientes</Text>
                {detail.ingredientes && detail.ingredientes.length > 0 ? (
                    detail.ingredientes.map((item, index) => (
                        <Ingredientes key={`ingrediente-${index}`} data={item} />
                    ))
                ) : (
                    <Text>Nenhum ingrediente encontrado.</Text>
                )}

                <Text style={styles.title}>Modo de Preparo</Text>
                {detail.instrucoes && detail.instrucoes.length > 0 ? (
                    detail.instrucoes.map((item, index) => (
                        <Instrucoes key={`instrucao-${index}`} data={item} index={index} />
                    ))
                ) : (
                    <Text>Nenhuma instrução encontrada.</Text>
                )}
            </View>
        </ScrollView>
    );
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