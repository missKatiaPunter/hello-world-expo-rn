# My first expo app and notes

## Navigator

`navigator` in `App.js` is a tool from the library [react-navigation](https://reactnavigation.org/).

`StackNavigator` from 'react-navigation-stack' sends props with `props.navigation.navigate('Where')`

## Styles in RN

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

## Flat List

If you use an array of objects as `data` in a FlatList each element is like:

```js
element === { item: { 'xx': 'xxx'}, index: int }
```

iOS lists deafult as scrollable but Android are not

## Buttons and TouchableOpacity controls

Button-like control was initially TouchableOpacity, but now a Button component also exists

Default buttons look very different for iOS and Android

A [Button](https://reactnativeelements.com/docs/button/#containerstyle) does not have the style prop, use TouchableOpacity

Button components will appear different on iOS and Android, i.e. `color` prop will color text/§background.

`onPress` replaces `onClick`

>The `console.log()` will log in the *_terminal_* where the expo app is running:

```js
    <Button
        color='red'
        onPress={() => console.log("My button was pressed")}
        title="Go to Components Demo"
    />
```

[TouchableOpacity](https://reactnative.dev/docs/touchableopacity) is a customizable
control that allows attaching press events to almost any kind of element

TouchableOpacity:

1. is _not_ self closing
2. Can wrap around multiple elements
3. Has **no** default styling unlike Button except ⬇
    * Elements **inside** TouchableOpacity fade in and out on Press

## Image

Image is yet another React Native primitive

>It has a prop `source`, not `src`

You can use a `require` statement like so:

```js
    <Image source={require('../../assets/beach.jpg')}/>
```

## useReducer

> "A reducer could be called FunctionThatManagesChangesToAnObject" S. Grider

Use this [react](https://reactjs.org/) hook when:

* Different pieces of state are "extremely closely related";

* There is a well known way the state values are updated

* (From React docs): when you need to do **deep** state updates (>1 child down/up)

The `reducer()` function is out of a component **by convention**, to avoid having two `state` variables.

```js
const reducer = (state, action) => {
    ...
}

const ReducerTrialScreen = () => { ...
```

param names `action`, `dispatch` are also **conventions**.

A reducer **must** return (old or new state)
