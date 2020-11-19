import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Divider, Icon } from 'react-native-elements';

const TextInputScreen = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return <View>
        <Text style={ styles.textStyle }>
            This is a Text Input screen
        </Text>
        <TextInput
            placeholder='Type your name'
            style={ styles.inputTextStyle }
            autoCapitalize='words'
            autoCorrect={ false }
            value={ name }
            onChangeText={ newValue => setName(newValue) }
        />
        <Text style={ styles.textStyle }>My name is { name }</Text>
        <Divider />
        <TextInput
            placeholder='Type your password'
            secureTextEntry={true}
            style={ styles.inputTextStyle }
            autoCapitalize='words'
            autoCorrect={ false }
            value={ password }
            onChangeText={ newPassword => setPassword(newPassword) }
        />
        { password.length > 8
        ? <Icon
           name='trophy'
            type='evilicon'
            color='orange'
            size='100'
        />
        :<Text style={[ styles.textStyle, {color: 'red'}] }>Password should be longer</Text>
        }       
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        paddingVertical:10,
        alignSelf: 'center'
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