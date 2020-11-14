import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ImageDetail = ({ title }) => {
    return (
        <View>
            <Text style={ styles.textStyle }>
                { title }
            </Text>
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