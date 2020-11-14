import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
    const { imageSource, title, score } = props;
    return (
        <View>
            <Text style={ styles.textStyle }>
                { title }
            </Text>
            <Image source={ imageSource } style={styles.imgStyle}/>
            <Text style={styles.textStyle}>Score - { score }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'purple'
    },
    imgStyle:{
        margin:2
    }
})

export default ImageDetail;