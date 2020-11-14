import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
    return(
        <View>
            <Text style={styles.text}>Hello World!</Text>
            <Button
                onPress={() => console.log("A button was pressed")}
                title="Go to Components Demo"
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
