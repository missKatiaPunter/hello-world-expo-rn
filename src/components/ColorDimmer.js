import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const ColorDimmer = ({ color, onIncrease, onDecrease }) => {
    return <View>
        <Text style={ [{color: `${color}`}, styles.textStyle] }>{ color }</Text>
        <TouchableOpacity
            onPress={ onIncrease }
        >
            <Text>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={ onDecrease }
        >
            <Text>Decrease</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})

export default ColorDimmer;