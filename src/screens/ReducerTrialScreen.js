import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ColorDimmer from '../components/ColorDimmer';

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {
    switch (action.colorToChange){
        case 'red':
            return { ...state, red: state.red + action.amount }
        case 'green':
            return { ...state, green: state.green + action.amount }
        case 'blue':
            return { ...state, blue: state.blue + action.amount }
        default:
    }
};

const ReducerTrialScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0})

    return <View>
        <Text style={ styles.textStyle }>Pick Color with Reducer</Text>
        <ColorDimmer
            onIncrease={ () => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
            onDecrease={ () => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
            color='red'
        />
        <ColorDimmer
            onIncrease={ () => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
            onDecrease={ () => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
            color='green'
        />
        <ColorDimmer
            onIncrease={ () => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
            onDecrease={ () => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
            color='blue'
        />
    </View>
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 20,
    },
    textStyle: {
        fontSize: 25,
        alignSelf: "center",
    }
});

export default ReducerTrialScreen;