import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const ColorScreen = () => {

    const generateRandCol = () => {
        const randNumLess255 = () => Math.floor(Math.random() * 255)
        return `rgb(${randNumLess255()}, ${randNumLess255()}, ${randNumLess255()})`
    }

    const [colors, setColors] = useState([]);

    return <View style={ styles.containerView }>
        <Text style={ styles.textStyle }>Color Picker Demo</Text>
        <TouchableOpacity
            style={ styles.buttonStyle }
            onPress={() => {
                setColors([...colors, generateRandCol()])
                console.log("I am tocuhable opacity from color picker")
            }}
        >
            <Text >Click Me</Text>
        </TouchableOpacity>
        <FlatList
            keyExtractor={(item) => item}
            data={ colors }
            renderItem={({item}) => {
                return(
                    <View
                        style={{height:30, width:300, backgroundColor: item}}
                    ></View>
                )
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize:30,
        color: '#222',
        alignSelf: "center",
        paddingBottom:30,
    },
    containerView: {
        flex: 1,
        padding:20,
        alignItems: 'center',
    },
    buttonStyle: {
        alignItems: "center",
        elevation: 8,
        borderRadius:10,
        backgroundColor: "#009688",
        padding: 10,
        marginBottom:30,
    }
})

export default ColorScreen;