import React from 'react';
import { Text, StyleSheet } from 'react-native';

const ComponentScreen = () => {
    return <Text style={ styles.text }>Lalalala!</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#3b2975',
    }
});
export default ComponentScreen;