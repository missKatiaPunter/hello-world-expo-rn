import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextInputScreen = () => {
    return <View>
        <Text style={ styles.textStyle }>
            This is a Text Input screen
        </Text>
        <TextInput
            style={ styles.inputTextStyle }
            autoCapitalize='none'
            autoCorrect={ false }
        />
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    },
    inputTextStyle: {
        fontSize: 20,
        margin: 40,
        padding: 10,
        borderColor: '#001',
        borderWidth: 2,
        borderRadius: 3,
        borderStartColor: 'purple',
    }
});

export default TextInputScreen;