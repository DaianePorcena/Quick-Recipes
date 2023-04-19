import { useState, useEffect} from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../../Components/logo';

import dataRecipes from '../../assets/receitas/receitas.json';
import { FoodList } from '../../Components/foodList';

const LIMIT = 6; // quantidade de receitas por página

export function Home() {
    const [receitas, setReceitas] = useState([]);
    const [filteredReceitas, setFilteredReceitas] = useState([]);
    const [loading, setLoading] = useState(false); // indica se está carregando mais receitas
    const [page, setPage] = useState(1); // página atual
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setReceitas(dataRecipes.foods.slice(0, LIMIT * page)); // carrega as primeiras receitas
    }, [page])

    useEffect(() => {
        // filtra as receitas com base no termo de busca
        const filtered = receitas.filter(receita =>
          receita.name.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredReceitas(filtered);
      }, [inputValue, receitas]);
    
      function handleSearch() {
        setFilteredReceitas(
          receitas.filter(receita =>
            receita.name.toLowerCase().includes(inputValue.toLowerCase())
          )
        );
    }


    function handleLoadMore() {
        if (loading || (page * LIMIT >= dataRecipes.foods.length)) {
            // se já estiver carregando ou se já carregou todas as receitas, não faz nada
            return;
        }
        setLoading(true);
        setTimeout(() => {
            setPage(page + 1); // carrega mais receitas
            setLoading(false);
        }, 1500); // simula um tempo de resposta do servidor
    }

    return (
        <SafeAreaView style={styles.home}>
            <Logo />
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Pesquise uma receita..."
                        style={styles.input}
                        value={inputValue}
                        onChangeText={(text) => setInputValue(text)}
                    />
                    <TouchableOpacity onPress={handleSearch}>
                        <Ionicons name="search" size={28} color="#7A7A7A" />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={inputValue ? filteredReceitas : receitas}
                    numColumns={2}
                    keyExtractor={item => String(item.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <FoodList data={item} />
                    )}
                    onEndReached={handleLoadMore} // carrega mais receitas quando chega no final da lista
                    onEndReachedThreshold={0.2} // define o quanto do final da lista precisa ser alcançado para carregar mais receitas
                    ListFooterComponent={() => loading && <ActivityIndicator size="large" color="#C60024" style={{ marginVertical: 20 }} />} // exibe um indicador de carregamento enquanto está carregando mais receitas
                />
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#C60024',
        paddingTop: 45,
        shadowColor: '000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 50, // adicione a elevação para Android
    },
    container: {
        flex: 1,
        backgroundColor: '#F0E5E7',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 28
    },
    form: {
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 16,
        borderRadius: 5,
        shadowColor: '000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 5,
        paddingLeft: 8,
        paddingRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '90%',
        height: 54,
        maxWidth: '90%'
    }
})