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
        <Text>Pick Color with Reducer</Text>
    </View>
}

const styles = StyleSheet.create({
    containerStyle:{
        padding: 20,
    }
});

export default ReducerTrialScreen;