import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorDimmer from '../components/ColorDimmer';

const COLOR_INCREMENT = 10;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return <View>
        <Text style={ styles.textStyle }>
            Advanced Color Picker
        </Text>
        <ColorDimmer
            onIncrease={() => setRed(red+1)}
            onDecrease={() => setRed(red-1)}
            color="red"
        />
        <ColorDimmer
            onIncrease={() => setGreen(green+1)}
            onDecrease={() => setGreen(green-1)}
            color="green"
        />
        <ColorDimmer
            onIncrease={() => setBlue(blue+1)}
            onDecrease={() => setBlue(blue-1)}        
            color="blue"
        />
        <View
            style={{
                height:200,
                width: 100,
                backgroundColor:`rgb(${red},${green},${blue})`
            }}>
        </View>
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30,
        alignSelf: "center",
        marginBottom: 30,
    }
});

export default SquareScreen;