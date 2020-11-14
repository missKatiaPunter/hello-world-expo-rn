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
