import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {

    const scoreGenerator = num => Math.floor(Math.random() * num) + 1;

    return(
        <View>
            <Text style={ styles.textStyle }>
                Some Images:
            </Text>
            <ImageDetail
                title="Beach"
                imageSource={ require('../../assets/beach.jpg') }
                score={ scoreGenerator(10) }
            />
            <ImageDetail 
                title="Mountain" 
                imageSource={ require('../../assets/mountain.jpg') }
                score={ scoreGenerator(10) }
            />
            <ImageDetail
                title="Forest"
                imageSource={ require('../../assets/forest.jpg') }
                score={ scoreGenerator(10) }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40,
        color: 'red',
    }
});

export default ImageScreen;