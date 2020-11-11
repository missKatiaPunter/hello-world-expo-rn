import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text style={ styles.text }>Lalalala! It works</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: '#3b2975'
    }
});

export default ComponentsScreen;