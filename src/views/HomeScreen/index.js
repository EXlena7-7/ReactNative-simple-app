import React from "react";
import {Text, SafeAreaView, StyleSheet, View, Image} from "react-native";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image 
                source={{ uri:'https://avatars.githubusercontent.com/u/109706655?s=400&u=f6d8213d1017c81501909c1cf3558992aee32e1a&v=4'}} style={styles.image}/>
            </View>
            <View style={styles.content}>
                <Text>Welcome back, User!</Text>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    headerContainer:{
        backgroundColor:"#63A4FF",
        height: 50,
        justifyContent: 'center',
        alignItems:"flex-end",
        paddingLeft: 12,
        paddingRight: 12,
    },
    image:{
        width: 35,
        height: 35
    },
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize: 30
    }
})

export default HomeScreen;