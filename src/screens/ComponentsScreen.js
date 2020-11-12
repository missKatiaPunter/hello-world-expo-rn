import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const  extraLine = <Text style={{ color: 'green' }}>JSX rules are almost as in React</Text>;

    return <View>
        <Text style={ styles.text }>Lalalala! It works</Text>
        { extraLine }
    </View>
};

// You do not have to use StyleSheet:
// const ComponentsScreen = () => {
//     return <Text style={{fontSize: 70}}>Lalalala! It works</Text>;
// };

const styles = StyleSheet.create({
    text: {
        fontSize: 50,
        color: '#3b2975'
    }
});

export default ComponentsScreen;