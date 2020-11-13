import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const FlatListComponent = () => {

    const makeArrayOfNumberedFriends = (num) => {
        return [...Array(num).keys()].map((el,i) => {
            return {
                name: `MyFriend#${el+1}`,
                key: `${i}`
            }
        });
    } 

    const friends = makeArrayOfNumberedFriends(7);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={ false }
            data = { friends }
            keyExtractor={ item => item.key }
            renderItem = {({ item }) => {
                return <Text style={ styles.textStyle }>{ item.name }</Text>;
            }}

        />
    );

}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default FlatListComponent;