import React, { useState } from "react";
import {Text, View, Image, TextInput, Button, StyleSheet, Alert} from "react-native";


const LoginScreen = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const handleSignInPress = () =>{
        if (user.trim() .length > 0 && password.trim().length > 0){
         if (user ==="userAdmin" && password ==="secret"){
            navigation.navigate("Home");
         }else{
            Alert.alert("Error", "El usuario y contraseña son incorrectos");
            setPassword("");
            setUser("");
         }
        }
    };
    const handleUserTextChange = (text) => setUser(text);
    const handlePasswordTextChange = (text) => setPassword(text);

    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image source={{ uri:'https://avatars.githubusercontent.com/u/109706655?s=400&u=f6d8213d1017c81501909c1cf3558992aee32e1a&v=4'}} style={styles.image}/>
            </View>
            <View style={styles.inputContainer}>
            <TextInput 
            placeholder="user" 
            style={styles.textInput}
            onChangeText={handleUserTextChange}
            value={user} 
            />
            <TextInput 
            placeholder="password" 
            style={styles.textInput} 
            secureTextEntry
            onChangeText={handlePasswordTextChange}
            />
            </View>
            <Button style={styles.button} title="Sign in" onPress={handleSignInPress}/>
        </View>
    )
};

const styles = StyleSheet.create({
image:{
    width:70,
    height:70,
    alignSelf:"center",
},
imageContainer:{
    marginTop: 10,
    marginBottom: 10
},
textInput:{
backgroundColor:'#fff',
padding: 6,
marginTop: 4,
marginBottom: 12,
fontSize: 16
},
button:{
    backgroundColor:"#1976D2"
},
container:{
    flex:1,
    justifyContent:"center",
    marginLeft:18,
    marginRight: 18,
}
})

export default LoginScreen;