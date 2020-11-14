import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title }) => {
    return (
        <View>
            <Text style={ styles.textStyle }>
                { title }
            </Text>
            <Image source={require('../../assets/beach.jpg')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'purple'
    }
})

export default ImageDetail;