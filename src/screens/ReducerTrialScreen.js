import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorDimmer from '../components/ColorDimmer';

const COLOR_INCREMENT = 25;

const reducer = (state, action) => {

    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state
            : { ...state, red: state.red + action.payload }
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state
            : { ...state, green: state.green + action.payload }
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state
            : { ...state, blue: state.blue + action.payload }
        default:
    }
};

const ReducerTrialScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
    const { red, green, blue } = state;

    return <View>
        <Text style={ styles.textStyle }>Pick Color with Reducer</Text>
        <ColorDimmer
            onIncrease={ () => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
            onDecrease={ () => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
            color='red'
        />
        <ColorDimmer
            onIncrease={ () => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
            onDecrease={ () => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
            color='green'
        />
        <ColorDimmer
            onIncrease={ () => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })}
            onDecrease={ () => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
            color='blue'
        />
        <View
            style={{
                height:100,
                width: 100,
                backgroundColor:`rgb(${red},${green},${blue})`
            }}>
        </View>
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