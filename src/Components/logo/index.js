import { View, Text, Image, StyleSheet } from "react-native";

export function Logo() {
    return (
        <View style={styles.logoArea}>
            <Image style={styles.imageLogo} source={require('../../assets/imgs/logo.png')}/>
            <Text style={styles.textLogo}>Quick Recipes</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    logoArea: {
        backgroundColor: '#C60024',
        padding: 8,
        paddingBottom: 16,
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignContent: 'center'
    },
    imageLogo:{
        width: 40,
        height: 40,
       marginRight: 8
    },
    textLogo:{
        fontFamily: 'Cookie_400Regular',
        fontSize: 38,
        color: '#FFF'
    }
})