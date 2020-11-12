// The task
// 2 text elements
// First says Get started with React Native and has font size 45
// Second says my name is and uses and var and font size 20

import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const FirstTask = () => {
    const myName = "Ekaterina Stanislavovna";
    const myMessage = <Text style={ firstTaskStyle.messageStyle }>{ myName }</Text>;

    return <View>
        <Text style={firstTaskStyle.mainTextStyle}>
            Get started with React Native
        </Text>
        { myMessage }
    </View>
}

const firstTaskStyle = StyleSheet.create({
    mainTextStyle: {
        fontSize: 45
    },
    messageStyle: {
        fontSize: 20,
        color: 'purple'
    }
});

export default FirstTask;