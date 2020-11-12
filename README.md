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
