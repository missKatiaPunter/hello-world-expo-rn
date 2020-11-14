import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = (props) => {
    console.log(props);
    return(
        <View>
            <Text style={ styles.textStyle }>
                This is Images Screen, hello
            </Text>
            <ImageDetail title="Beach"/>
            <ImageDetail title="Mountain"/>
            <ImageDetail title="Forest"/>
            <ImageDetail />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: 'red'
    }
});

export default ImageScreen;