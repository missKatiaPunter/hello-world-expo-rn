# My first expo app and notes

`navigator` in `App.js` is a tool from the library [react-navigation](https://reactnavigation.org/).

You can use inine css as so:

```js
const ComponentsScreen = () => {
    return <Text style={{fontSize: 70}}>Lalalala! It works</Text>;
};
```

> Inline css does not error if there was a typo. It gives a warning.

View rather than Fragment.

You can multiline as so:

```js
return <View>
    <Text style={ styles.text }>Lalalala! It works</Text>
    { extraLine }
</View>
```

If you use an array of objects as `data` in a FlatList each element is like:

```js
element === { item: { 'xx': 'xxx'}, index: int }
```

iOS lists deafult as scrollable but Android are not
