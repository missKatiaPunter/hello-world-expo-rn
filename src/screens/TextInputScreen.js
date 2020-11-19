import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextInputScreen = () => {

    const [value, setValue] = useState('');

    return <View>
        <Text style={ styles.textStyle }>
            This is a Text Input screen
        </Text>
        <TextInput
            style={ styles.inputTextStyle }
            autoCapitalize='none'
            autoCorrect={ false }
            value={ value }
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