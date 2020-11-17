import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorDimmer from '../components/ColorDimmer';

const COLOR_INCREMENT = 50;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {
        switch(color){
            case 'red':
                (red+change) > 255 || (red+change) < 0 ? null : setRed(red+change);
                return;
            case 'green':
                (green+change) > 255 || (green+change) < 0 ? null : setGreen(green+change);
                return;
            case 'blue':
                (blue+change) > 255 || (blue+change) < 0 ? null : setBlue(blue+change);
                return;
            default:
                return;
        }
    }

    return <View>
        <Text style={ styles.textStyle }>
            Advanced Color Picker
        </Text>
        <ColorDimmer
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color="red"
        />
        <ColorDimmer
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color="green"
        />
        <ColorDimmer
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}       
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