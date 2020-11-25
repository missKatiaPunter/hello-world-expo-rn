import React, { useReducer } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    //state is like: { counter: number }
    //action is: { type: 'increment' || 'decrement', payload: 1}
    switch(action.type){
        case('increment'):
            return { ...state, counter: state.counter + action.payload }
        case('decrement'):
            return { ...state, counter: state.counter - action.payload }
        default:
            return state;
    }
};

const CounterWithReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, { counter: 0 })
    return <View>
        <Text style={ styles.textStyle }>Counter made with a Reducer</Text>
        <TouchableOpacity
            onPress={ () => dispatch({ type: 'increment', payload: 1 })}
        >
            <Text
                style={ [
                    { color: 'green' },
                    styles.textStyle
                ]}
            >Increment: ⬆️</Text>
        </TouchableOpacity>            
        <TouchableOpacity
            onPress={ () => dispatch({ type: 'increment', payload: 1 })}
        >
            <Text
                style={[
                    styles.textStyle,
                    { color: 'red' },
                ]}
            >Decrement: ⬇️</Text>
        </TouchableOpacity>
        <Text style={[ styles.textStyle, { borderWidth: 1 } ]}>Counter: { state.counter }</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 30,
        textAlign:"center",
        padding: 10,
        margin: 10,
    }
});

export default CounterWithReducer;