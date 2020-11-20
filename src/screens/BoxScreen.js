import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return <View style={ styles.viewStyle }>
        <Text style={ styles.textStyle }>Child 1</Text>
        <Text style={ styles.textStyle }>Child 2</Text>
        <Text style={ styles.textStyle }>Child 3</Text>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 6,
        borderColor: 'grey',
    },
    textStyle: {
        borderWidth: 4,
        borderColor: 'red',
    }
});

export default BoxScreen;