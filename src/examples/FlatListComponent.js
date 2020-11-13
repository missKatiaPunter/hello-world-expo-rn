import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';



const FlatListComponent = () => {

    const makeArrayOfNumberedFriends = (num) => {
        return [...Array(num).keys()].map(el => {
            return {
                name: `Friend#${el+1}`
            }
        });
    } 

    const friends = makeArrayOfNumberedFriends(5);

    return (
        <FlatList
            data = { friends }
            renderItem = {({ item }) => {
                return <Text>{ item.name }</Text>;
            }}
        />
    );

}

const styles = StyleSheet.create({

});

export default FlatListComponent;