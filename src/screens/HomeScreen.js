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
            <TouchableOpacity onPress={() => navigation.navigate('Task')}>
                <Text>
                    Go to List Demo
                </Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
