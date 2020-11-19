import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextInputScreen = () => {
    return <View>
        <Text style={ StyleSheet.textStyle }>
            This is Text Inpute screen
        </Text>
        <TextInput>

        </TextInput>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
    }
});

export default TextInputScreen;