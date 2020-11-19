import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import FirstTask from './src/examples/FirstTask';
import FlatListComponent from './src/examples/FlatListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import ReducerTrialScreen from './src/screens/ReducerTrialScreen';
import CounterWithReducer from './src/screens/CounterWithReducer';
import TextInputScreen from './src/screens/TextInputScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Task: FirstTask,
    List: FlatListComponent,
    Images: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Reducercol: ReducerTrialScreen,
    Reducercounter: CounterWithReducer,
    TextInput: TextInputScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(navigator);
