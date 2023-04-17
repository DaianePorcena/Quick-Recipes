import { View, Text, StyleSheet} from 'react-native'

export function Search(){
    return(
        <View>
            <Text style={styles.container}>Página Buscar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
    }
})