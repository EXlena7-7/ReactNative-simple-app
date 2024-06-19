import React, {useState} from "react";
import { ScrollView, View, Button, Text, TextInput, StyleSheet, SafeAreaView, FlatList } from "react-native";

const TodoListScreen = () => {
    const [todoListData, setTodoListData] = useState([]);
    const [todoText, setTodoText] = useState("");

    const handleChangeText = (text) => {
        setTodoText(text);
    };

    const handleButtonPress = () => {
      if (todoText.trim().length > 0) {
        setTodoListData((value) => value.concat({ text: todoText }));
        setTodoText("");
      }
    };

    const handleRenderListItem = ({item}) => {
        return <Text>{item.text}</Text>;
    };

    return(
        <SafeAreaView style={style.container}>
            <View style={style.viewContainer}>
                <View>
                <TextInput 
                placeholder="Escribe tu palabra" 
                style={style.textInput}
                placeholderTextColor="#C4C4C4"
                value={todoText}
                onChangeText={handleChangeText}
                />
                <Button title="Enter" style={style.button} onPress={handleButtonPress} />
                </View>
                <View>
                <FlatList
                data={todoListData}
                renderItem={handleRenderListItem}
                keyExtractor={(item) => item.text}
                />
                </View>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFFBFB",
    },
    viewContainer:{
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    textInput:{
        backgroundColor:"#F5F5F5",
        color:"#212121",
        fontSize: 16,
        marginBottom: 16
    }
});

export default TodoListScreen;