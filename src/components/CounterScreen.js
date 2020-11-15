import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {

    const [counter, setCounter] = useState(0);

    return <View style={ styles.container }>
        <Text style={ styles.textStyle }>I am Counter 🎩</Text>
        <Button
            color="darkblue"
            title="Increase"
            onPress={() => setCounter(counter+1)}
        />
        <Button
            color="orange"
            title="Decrease"
            onPress={() => setCounter(counter-1)}
        />
        <Text style={ styles.counterText }>Count: { counter }</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textStyle: {
        fontSize:40,
        color: '#45f',
        alignSelf: "center",
        textTransform: "uppercase"
    },
    counterText: {
        fontSize: 40,
        color: "#324",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default CounterScreen;