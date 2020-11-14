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

Button-like control was initially TouchableOpacity, but now a Button component also exists

Default buttons look very different for iOS and Android

`onPress` replaces `onClick`

>The `console.log()` will log in the *_terminal_* where the expo app is running:

```js
    <Button
        onPress={() => console.log("My button was pressed")}
        title="Go to Components Demo"
    />
```

[TouchableOpacity](https://reactnative.dev/docs/touchableopacity) is a customizable
control that allows attaching press events to almost any kind of element

TouchableOpacity:

1. is *_not_* self closing
2. Can wrap around multiple elements
3. Has **no** default styling unlike Button except
    * Elements **inside** TouchableOpacity fade in and out on Press
