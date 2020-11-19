import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  console.log("Hello", navigation);
    return(
        <View>
            <Text style={styles.text}>Hello World!</Text>
            <Button
                onPress={() => navigation.navigate('Components')}
                title="Go to Components Demo"
            />
            <Button
                onPress={() => navigation.navigate("Images")}
                title="Go to Images Demo"
            />
             <Button
                onPress={() => navigation.navigate("Counter")}
                title="Go to Counter Demo"
            />
            <Button
                onPress={() => navigation.navigate("List")}
                title="Go to List Demo"
            />             
            <Button
                onPress={() => navigation.navigate("Color")}
                title="Go to Color Picker Demo"
            />
            <Button
                onPress={() => navigation.navigate("Square")}
                title="Go to Advanced Color Picker Demo"
            />
            <Button
                onPress={() => navigation.navigate("Reducercol")}
                title="Change color with a reducer"
            />
            <Button
                onPress={() => navigation.navigate("Reducercounter")}
                title="Change counter with a reducer"
            />
            <Button
                onPress={() => navigation.navigate("TextInput")}
                title="Text Input Screen"
            />
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
